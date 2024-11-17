"use client";
import ChatMenu from "./components/ChatMenu";
import ChatBox from "./components/ChatBox";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import { Provider } from 'react-redux';
import store from './store/store';
import "./globals.css";
import Main from './main'
import { useEffect } from "react";
export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // setDarkMode(prefersDark);
    if (prefersDark) {
      // document.documentElement.classList.add('dark');
    }
  }, []);
  const showSession = () => {
    if (status === "authenticated") {
      return (


        <Provider store={store} >
          <Main  />

        </Provider>
      )
    } else if (status === "loading") {
      return (
        <Loading />
      )
    } else {
      return (
        <Link
          href="/login"
          className="border border-solid border-black rounded"
        >
          Sign In
        </Link>
      )
    }
  }
  return (
    <main className="">
      {showSession()}
    </main>
  );
}