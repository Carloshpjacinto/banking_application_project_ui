'use server';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type ItemHistorico = {
  tipo: 'ENVIADA' | 'RECEBIDA' | 'DEPOSITO';
  valor: number;
  data: string;
  contaDestino: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getHistory(
  description?: 'RECEIVED' | 'SENT' | 'DEPOSIT',
): Promise<ItemHistorico[]> {
  const accessToken = (await cookies()).get('access_token')?.value;
  if (!accessToken) redirect('/login');

  const { data } = await axios.get(`${apiUrl}/auth/bankaccounthistory`, {
    params: { description },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(data)

  return data.map((item: any) => ({
    tipo: item.description,
    valor: item.value,
    data: item.created_at,
    contaDestino: item.destiny_account,
  }));
}
