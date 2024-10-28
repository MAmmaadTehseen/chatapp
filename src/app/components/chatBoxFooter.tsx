import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function chatBoxFooter() {
    return (
        <div className='h-12 flex bg-blue-700 '>
            <button> <MdOutlineEmojiEmotions className='text-3xl m-2 text-white' /></button>
            <button onClick={() => { 
                console.log('attachment')
                 }}><IoIosAttach className='text-3xl m-2 text-white' /></button>
            <input className='w-full bg-blue-700 border-blue-800 border-2 rounded-xl p-2 focus:outline-0 hover:bg-blue-800 focus:bg-blue-800 text-white' type='text' />
            <button onClick={() => {
                console.log('clicked send')
            }} className=''><IoSend className='m-2 text-2xl text-white' /></button>
        </div>
    )
}
