import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from '@/api';
import { cookies } from 'next/headers';

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

        const loginResponse = await axios.post('/auth/login', {
          num_account,
          access,
        });

        const { access_token } = loginResponse.data;

        if (!access_token) throw new Error('Falha na autenticação');

        (await cookies()).set('access_token', access_token);

        const payload = JSON.parse(
          Buffer.from(access_token.split('.')[1], 'base64').toString(),
        );

        const { sub: id } = payload;

        const bankAccountId = Number(id);

        await axios.get(
          `/bankaccount/${bankAccountId}`,
          {
            headers: { Authorization: `Bearer ${access_token}` },
          },
        );

        const userId = bankAccountId;

        const { data: user } = await axios.get(`/user/${userId}`, {
          headers: { Authorization: `Bearer ${access_token}` },
        });

        if (!user) throw new Error('Usuário não encontrado');

        return {
          id: user.id,
          cpf: user.cpf,
          name: user.name,
          email: user.email,
          access_token,
          image: user.avatar,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.cpf = user.cpf;
        token.name = user.name;
        token.email = user.email;
        token.access_token = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as number,
        cpf: token.cpf as string,
        name: token.name as string,
        email: token.email as string,
        access_token: token.access_token as string,
      };
      return session;
    },
  },
  pages: { signIn: '/login' },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
