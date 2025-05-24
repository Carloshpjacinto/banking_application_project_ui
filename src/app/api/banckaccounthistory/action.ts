'use server';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { BankAccountAccountHistory } from '@/types/bankAccountHistory';

/* eslint-disable @typescript-eslint/no-explicit-any */

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getHistory(
  description?: 'RECEIVED' | 'SENT' | 'DEPOSIT',
): Promise<BankAccountAccountHistory[]> {
  const accessToken = (await cookies()).get('access_token')?.value;
  if (!accessToken) redirect('/login');

  const { data } = await axios.get(`${apiUrl}/auth/bankaccounthistory`, {
    params: { description },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(data);

  return data.map((item: any) => ({
    cpf_sender: item.cpf_sender,
    cpf_recipient: item.cpf_recipient,
    transfer_type: item.transfer_type,
    description: item.description,
    transfer_value: item.transfer_value,
    date_transfer: item.date_transfer,
  }));
}
