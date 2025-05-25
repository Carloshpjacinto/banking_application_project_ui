import Image from 'next/image';
import { getHistory } from '../api/banckaccounthistory/action';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import HistoricoCliente from '@/components/historyComponents';
import { BankAccountAccountHistory } from '@/types/bankAccountHistory';

const HistoricoPage = async () => {
  const session = await getServerSession();

  if (!session?.user) redirect('/login');

  const historico: BankAccountAccountHistory[] = await getHistory('SENT');

  return (
    <div>
      <nav className="w-full flex items-center justify-between text-[2rem] font-medium bg-green-kpp text-white p-4">
        <Image src="/Kpp.png" alt="Logo do banco" width={200} height={100} />
        <a
          href="/perfil"
          className="hover:text-black transition-colors duration-500 mr-[5rem]"
        >
          Voltar
        </a>
      </nav>

      <HistoricoCliente historicoInicial={historico} />
    </div>
  );
};

export default HistoricoPage;
