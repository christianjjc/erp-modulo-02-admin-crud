import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      role: string;
      isActive: boolean;
      email: string;
      emailVerified?: Date | null;
      image?: string;
    } & DefaultSession['user'];
  }
}
