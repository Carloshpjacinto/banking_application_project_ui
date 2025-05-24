export type Description = 'SENT' | 'RECEIVED' | 'DEPOSIT';

export type Transfer_type = 'PIX' | 'DEPOSIT'

export type BankAccountAccountHistory = {
  id: 1;
  cpf_sender: string;
  cpf_recipient: string;
  transfer_type: Transfer_type;
  description: Description;
  transfer_value: string;
  date_transfer: string;
};
