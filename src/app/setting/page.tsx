"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { signOut } from "next-auth/react";


const Page = () => {
    const router = useRouter()
    return (
        <div className="grid place-items-center h-screen  text-red-600 text-9xl">
            <div>
                <button
                    className="border border-solid border-black rounded"
                    onClick={() => {
                        signOut({ redirect: false }).then(() => {
                            router.push("/");
                        });
                    }}
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default Page