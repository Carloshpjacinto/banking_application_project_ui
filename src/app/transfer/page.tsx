import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import DetailRow from '@/components/DetailRow';
import { getProfile } from '../api/bankaccount/actions';
import Link from 'next/link';
import { transfer } from '../api/transfer/action';

export default async function TransferPage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect('/login');
  }

  const bankAccount = await getProfile();
  const isCurrent = bankAccount.type_bank_account === 'CURRENT_ACCOUNT';

  const initialState = { success: false, error: false, message: '' };
  const formAction = transfer.bind(null, initialState);

  return (
    <div className="flex flex-col w-full px-10 py-20 lg:px-56 xl:px-72">
      <section className="flex flex-col mt-2 xl:flex-row">
        <article className="w-full mb-[2rem]">
          <h1 className="font-bold text-[8rem] text-green-kpp">
            Transferência
          </h1>

          <Link
            href="/perfil"
            className="text-[1.5rem] inline-block mt-4 mb-6 text-green-kpp underline hover:text-green-700"
          >
            ← Voltar para o perfil
          </Link>

          <form
            action={formAction}
            className="mt-4 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-[2.5rem] font-bold mb-4">
              Transferência Bancária
            </h2>

            <label className="block mb-2 text-[1.8rem]">
              CPF do destinatário:
              <input
                type="text"
                name="cpf_recipient"
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </label>

            <label className="block mb-2 mt-4 text-[1.8rem]">
              Valor:
              <input
                type="number"
                name="transfer_value"
                step="0.01"
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </label>

            <label className="block mb-2 mt-4 text-[1.8rem]">
              Função da conta:
              <select
                name="function_transfer"
                className="w-full mt-1 p-2 border rounded"
              >
                <option value=" "> </option>
                <option value="TRANSFER_DEBIT">Saldo em conta</option>
                {isCurrent && <option value="TRANSFER_CREDIT">Crédito</option>}
              </select>
            </label>

            <label className="block mb-2 mt-4 text-[1.8rem]">
              Tipo de transferencia:
              <select
                name="type_transfer"
                className="w-full mt-1 p-2 border rounded"
              >
                <option value=" "> </option>
                <option value="PIX_TRANSFER">Pix</option>
                {isCurrent && <option value="DEPOSIT">Deposito</option>}
              </select>
            </label>

            <button
              type="submit"
              className="mt-4 bg-green-kpp text-white px-4 py-2 rounded hover:bg-green-700 transition text-[1.5rem]"
            >
              Realizar transferência
            </button>
          </form>
        </article>

        <article className="w-full h-auto shadow-lg rounded-xl ml-0 p-8 flex flex-col justify-start self-start bg-green-kpp">
          <span className="flex text-[4rem] font-bold text-white">
            Detalhes da conta
          </span>
          <div className="text-white text-[20rem]">
            <DetailRow
              title="Saldo em conta"
              description={`R$ ${Number(bankAccount.account_balance).toFixed(2)}`}
              className="mt-2 text-[1.8rem]"
            />
            {isCurrent && (
              <DetailRow
                title="Crédito"
                description={`R$ ${Number(bankAccount.credit).toFixed(2)}`}
                className="mt-2 text-[1.8rem]"
              />
            )}
            <DetailRow
              title="Cheque especial"
              description={`R$ ${Number(bankAccount.special_check).toFixed(2)}`}
              className="mt-2 text-[1.8rem]"
            />
            {isCurrent && (
              <DetailRow
                title="Débito em conta"
                description={`R$ ${Number(bankAccount.debit_account).toFixed(2)}`}
                className="mt-2 text-[1.8rem]"
              />
            )}
          </div>
        </article>
      </section>
    </div>
  );
}
