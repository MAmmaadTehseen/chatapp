"use client";
import ChatMenu from "./components/chatMenu";
import ChatBox from "./components/chatBox";
import {  useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "./loading";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();
  const showSession = () => {
    if (status === "authenticated") {
      return (
      
       
      
       <>
        <div className="fixed left-10  z-50  sm:block pr-3       ">
          <ChatMenu/>
        </div>
        <div className="sm:fixed sm:right-0  sm:w-auto sm:left-80 hidden sm:block ">
          <ChatBox/>
        </div>
       </>
      )
    } else if (status === "loading") {
      return (
        <Loading/>
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