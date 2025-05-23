/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import axios from '@/api';
import { cookies } from 'next/headers';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function signupBankAccount(state: any, formData: FormData) {
  try {
    const payload = {
      access: formData.get('access'),
      type_bank_account: formData.get('type_bank_account'),
    };

    const accessToken = (await cookies()).get('access_token')?.value;

    const response = await axios.post(
      `${apiUrl}/auth/register/access`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const access_token = response.data.access_token;

    (await cookies()).set('access_token', access_token);

    return {
      ...state,
      error: false,
      success: true,
      message: '',
      access_token: access_token,
    };
  } catch (err: any) {
    return {
      ...state,
      error: true,
      success: false,
      message: err.message || 'Erro desconhecido',
    };
  }
}
