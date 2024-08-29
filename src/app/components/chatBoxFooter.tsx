import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function chatBoxFooter() {
    return (
        <div className='h-12 flex bg-slate-800 '>
            <button> <MdOutlineEmojiEmotions className='text-3xl m-2 text-white' /></button>
            <button><IoIosAttach className='text-3xl m-2 text-white' /></button>
            <input className='w-full bg-slate-800 p-2 focus:outline-0 hover:bg-gray-700 text-white' type='text' />
            <button className=''><IoSend className='m-2 text-2xl text-white' /></button>
        </div>
    )
}
