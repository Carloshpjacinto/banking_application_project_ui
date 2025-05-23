/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      cpf: string;
      access_token: string;
    };
  }

  interface User {
    id: number;
    name: string;
    email: string;
    cpf: string;
    access_token: string;
  }

  interface JWT {
    id: number;
    name: string;
    email: string;
    cpf: string;
    access_token: string;
  }
}
