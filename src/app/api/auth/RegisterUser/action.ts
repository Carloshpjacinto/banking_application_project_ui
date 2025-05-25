/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import axios from '@/api';
import { cookies } from 'next/headers';
require('dotenv').config();

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function signupUser(state: any, formData: FormData) {
  try {
    const payload = {
      name: formData.get('NameUser'),
      email: formData.get('EmailUser'),
      CPF: formData.get('CpfUser'),
    };

    const response = await axios.post(`${apiUrl}/auth/register`, payload);

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
