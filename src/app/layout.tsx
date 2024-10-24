import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from  "./provider";
import Sidebar from "./components/sidebar";
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

  return (
    <html lang="en">

    <Provider>
    <body >
    <div className="z-50 fixed ">
  <Sidebar />
        </div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      {/* <div className={inter.className}>{children}</div> */}
      </body>
    </Provider>

    </html>
  );
}
