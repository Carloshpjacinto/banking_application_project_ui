/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import axios from '@/api';
import { cookies } from 'next/headers';
require('dotenv').config();

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function transfer(state: any, formData: FormData) {
  try {
    const accessToken = (await cookies()).get('access_token')?.value;

    if (!accessToken) {
      throw new Error('Token de autenticação não encontrado.');
    }

    const payload = {
      type_transfer: formData.get('type_transfer'),
      cpf_recipient: formData.get('cpf_recipient'),
      function_transfer: formData.get('function_transfer'),
      transfer_value: formData.get('transfer_value'),
    };

    console.log(payload);

    await axios.post(`${apiUrl}/auth/transfer`, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return {
      ...state,
      error: false,
      success: true,
      message: '',
    };
  } catch (err: any) {
    console.error('Erro ao realizar transferência:', err);

    return {
      ...state,
      error: true,
      success: false,
      message: err.message || 'Erro desconhecido',
    };
  }
}
