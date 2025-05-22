import { ReactNode } from 'react';
import DetailRow from '../DetailRow';
import { BankAccount } from '@/types/BankAccount';

type DetailPageProps = {
  backButton?: ReactNode;
  children: ReactNode;
  title: string;
  bankAccount: BankAccount;
};

const DetailPage = ({ title, children, bankAccount }: DetailPageProps) => {
  const {
    account_balance,
    credit,
    special_check,
    debit_account,
    type_bank_account,
  } = bankAccount;

  const IsCurrent = type_bank_account;
  return (
    <div className="flex flex-col w-full px-10 py-20 sm:px-20 md:px-32 lg:px-56 xl:px-72">
      <section className="w-full flex justify-between"></section>
      <section className="relative w-full h-80 mt-2"></section>
      <section className="flex flex-col mt-2 sm:flex-row">
        <article className="w-full">
          <h1 className="font-bold text-[5rem] text-green-kpp">{title}</h1>
          {children}
        </article>
        <article className="w-full h-auto shadow-lg rounded-xl ml-0 p-8 flex flex-col justify-start self-start sm:ml-10 bg-green-kpp">
          <span className="flex text-[4rem] font-bold text-white">
            {'Detalhes da conta'}
          </span>
          <div className="text-white text-[20rem]">
            <DetailRow
              title="Saldo em conta"
              description={`R$ ${Number(account_balance).toFixed(2) ?? '0,00'}`}
              className="mt-2 text-[1.8rem]"
            />

            {IsCurrent === 'CURRENT_ACCOUNT' && (
              <DetailRow
                title="Credito"
                description={`R$ ${Number(credit).toFixed(2) ?? '0,00'}`}
                className="mt-2 text-[1.8rem]"
              />
            )}

            <DetailRow
              title="Cheque especial"
              description={`R$ ${Number(special_check).toFixed(2) ?? '0,00'}`}
              className="mt-2 text-[1.8rem]"
            />

            {IsCurrent === 'CURRENT_ACCOUNT' && (
              <DetailRow
                title="Debito em conta"
                description={`R$ ${Number(debit_account).toFixed(2) ?? '0,00'}`}
                className="mt-2 text-[1.8rem]"
              />
            )}
          </div>
        </article>
      </section>
    </div>
  );
};

export default DetailPage;
