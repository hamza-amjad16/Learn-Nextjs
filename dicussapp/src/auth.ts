// lib/auth.ts

import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHub from "next-auth/providers/github";
import { prisma } from "@/lib/index";
import NextAuth from "next-auth";
import { getServerSession } from "next-auth";

// 1. Options
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // @ts-ignore
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};

// 2. Auth handler for route.ts
const handler = NextAuth(authOptions);
export const GET = handler;
export const POST = handler;

// 3. Export for server-side session access
export const auth = () => getServerSession(authOptions);
