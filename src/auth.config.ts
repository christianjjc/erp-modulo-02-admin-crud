import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

let userToken: any;

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account',
  },

  //* Para expandir el objeto usuario y devuelva información adicional
  callbacks: {
    //* params desestructurado
    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }
      userToken = token.data;
      //console.log({ userToken });
      return token;
    },
    session({ session, token, user }) {
      session.user = userToken;
      //console.log({ session, trigger, newSession });
      return session;
    },

    authorized({ auth, request: { nextUrl } }) {
      console.log({ middleware: auth });
      /*       const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      } */
      return true;
    },
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);
        if (!parsedCredentials.success) return null;
        const { email, password } = parsedCredentials.data;
        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!user) return null;
        if (!bcryptjs.compareSync(password, user.password)) return null;
        const { password: _, ...rest } = user;
        console.log({ user_rest: rest });
        return rest;
      },
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
