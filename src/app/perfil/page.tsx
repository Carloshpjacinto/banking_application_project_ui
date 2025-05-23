/* eslint-disable @next/next/no-html-link-for-pages */
import DetailPage from '@/components/DetailPage';
import Image from 'next/image';
import DetailRow from '@/components/DetailRow';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { getProfile } from '../api/bankaccount/actions';

const PerfilPage = async () => {
  const session = await getServerSession();

  if (!session?.user) redirect('/login');

  const bankAccount = await getProfile();

  return (
    <>
      <nav className="w-full flex items-center text-[2rem] font-medium bg-green-kpp text-white pt-[2.5rem] pr-[10rem] pb-[2rem] max-[102.4rem]:pr-[5rem] justify-between">
        <Image
          src="/Kpp.png"
          alt="Logo_do_banco"
          width={300}
          height={300}
          quality={90}
          priority
          className="rounded-lg w-50 h-20 object-cover ml-[5rem]"
        />
        <div></div>
        <a
          type="submit"
          className="text-[2.5rem] hover:text-black transition-colors duration-500"
          href="/"
        >
          Sair
        </a>
      </nav>

      <div className="mt-[-10rem]">
        <DetailPage title="Meu perfil" bankAccount={bankAccount}>
          <div className="mt-4 flex flex-col justify-center items-center">
            <Image
              src={'/usuarioDefault.jpg'}
              alt="Foto de perfil do usuário"
              width={300}
              height={300}
              className="rounded-full w-50 h-50 object-cover"
            />
            <div className="flex flex-col mt-4 justify-center">
              <span className="text-[2rem]">
                {new Date().toLocaleDateString('pt-BR')}
              </span>
            </div>
          </div>

          <hr className="my-10 text-green-kpp" />

          <div className="text-[1.5rem]">
            <DetailRow
              title="Nome"
              description={bankAccount?.user?.name ?? 'N/A'}
              className="mt-2"
            />
            <DetailRow
              title="E-mail"
              description={bankAccount?.user?.email ?? 'N/A'}
              className="mt-2"
            />
            <DetailRow
              title="CPF"
              description={bankAccount?.user.CPF ?? 'N/A'}
              className="mt-2"
            />
            <DetailRow
              title="Agência"
              description={bankAccount?.agency ?? 'N/A'}
              className="mt-2"
            />
            <DetailRow
              title="Número da conta"
              description={bankAccount?.num_account ?? 'N/A'}
              className="mt-2"
            />
            <DetailRow
              title="Tipo de conta"
              description={
                bankAccount?.type_bank_account === 'CURRENT_ACCOUNT'
                  ? 'Conta Corrente'
                  : 'Conta Poupança'
              }
              className="mt-2"
            />
          </div>
        </DetailPage>
        <div className="mt-8 mb-6 flex justify-center">
          <div className="flex gap-25 px-4 py-2">
            <a
              href="/transfer"
              className="text-[2.2rem] px-3 py-2 bg-green-kpp text-white rounded-md hover:bg-green-800 transition"
            >
              Transferência
            </a>
            <a
              href="/history"
              className="text-[2.2rem] px-3 py-2 bg-green-kpp text-white rounded-md hover:bg-green-800 transition"
            >
              Histórico
            </a>
          </div>
        </div>

        <hr className="my-10 text-green-kpp" />
      </div>
    </>
  );
};

export default PerfilPage;
