"use client";
import ChatMenu from "./components/chatMenu";
import ChatBox from "./components/chatBox";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import { Provider } from 'react-redux';
import store from './store/store';
import "./globals.css";
import { useSelector } from 'react-redux'
import Main from'./main'
export default function Home() {
  const { status } = useSession();
  const router = useRouter();
// console.log(chat)
  const showSession = () => {
    if (status === "authenticated") {
      return (
        
        
        <Provider store={store} >
<Main/>
         
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