'use server';
import axios from '@/api';
import { decryptToken } from '@/helpers/decryptToken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { BankAccount } from '@/types/BankAccount';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getProfile(): Promise<BankAccount> {
  const accessToken = (await cookies()).get('access_token')?.value;
  if (!accessToken) redirect('/login');

  const { id } = decryptToken(accessToken);

  const { data } = await axios.get(`${apiUrl}/bankaccount/${id}`);

  return data;
}
