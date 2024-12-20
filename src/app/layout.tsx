// 'use client'
import { connectDB } from "@/lib/mongoDB";
import { SessionProvider } from 'next-auth/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import { Suspense } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatapp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  connectDB()
  return (
    <html lang="en">
     
        <Provider >

          <Suspense fallback={<Loading />}>
            <body >
              {children}
            </body>
          </Suspense>
        </Provider>
      
    </html>
  );
}
