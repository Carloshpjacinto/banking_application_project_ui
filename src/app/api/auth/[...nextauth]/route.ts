/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from '@/api';
import { cookies } from 'next/headers';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        num_account: { label: 'num_account', type: 'text' },
        access: { label: 'access', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) throw new Error('Credenciais não fornecidas!');

        const { num_account, access } = credentials;


        const loginResponse = await axios.post(`${apiUrl}/auth/login`, {
          num_account,
          access,
        });

        console.log(loginResponse);

        const { access_token } = loginResponse.data;

        if (!access_token) throw new Error('Falha na autenticação');

        const payload = JSON.parse(
          Buffer.from(access_token.split('.')[1], 'base64').toString(),
        );

        const { sub: id } = payload;

        const bankAccountId = Number(id);

        await axios.get(`${apiUrl}/bankaccount/${bankAccountId}`);

        const userId = bankAccountId;

        const { data: user } = await axios.get(`${apiUrl}/user/${userId}`);

        if (!user) throw new Error('Usuário não encontrado');

        (await cookies()).set('access_token', access_token);

        return {
          id: user.id,
          cpf: user.cpf,
          name: user.name,
          email: user.email,
          access_token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: { signIn: '/login' },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
