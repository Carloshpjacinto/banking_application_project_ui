/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number;
    name: string;
    email: string;
    cpf: string;
    access_token: string;
  }

  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      cpf: string;
      access_token: string;
    };
  }
}
