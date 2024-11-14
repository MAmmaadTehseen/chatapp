"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { signOut } from "next-auth/react";
import { revalidatePath } from 'next/cache';


const Page = () => {
    const router = useRouter()
    return (
        <div className="grid ml-10 place-items-center h-screen  text-red-600 text-9xl">
            <div>
                <button
                    className="border border-solid border-black rounded"
                    onClick={() => {
                        signOut({ redirect: true });
                    }}
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default Page