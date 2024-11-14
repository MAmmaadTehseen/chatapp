import { connectDB } from "@/lib/mongoDB";
import User from "@/app/api/model/User";
import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) return null;

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/"
  },
  session: {
    strategy: 'jwt', // Use JWT for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user ID to token
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user ID to session
      if (token) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
};