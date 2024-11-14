// types/next-auth.d.ts

import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string; // Add the id property
  }

  interface Session {
    user: User; // Ensure the session user type includes the extended User type
  }
}