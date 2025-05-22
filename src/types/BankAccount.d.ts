import { User } from './User';

export type TypeBankAccount = 'CURRENT_ACCOUNT' | 'SAVINGS_ACCOUNT';

export type BankAccount = {
  id: number;
  agency: string;
  num_account: Role;
  account_balance: string;
  credit: string;
  special_check: string;
  debit_account: string;
  type_bank_account: TypeBankAccount;
  user: User;
};
