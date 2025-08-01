// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      id: string; // ✅ custom property
    };
  }

  interface User {
    id: string; // ✅ for use inside callbacks
  }
}
