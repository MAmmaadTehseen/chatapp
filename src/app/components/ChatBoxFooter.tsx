import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useSelector } from 'react-redux'

export default function ChatBoxFooter() {
    const mode = useSelector((state: any) => state.mode.value);

    return (
        <div className={`h-12 flex ${mode ? 'bg-[#121212] ' : 'bg-[#ffffff]'} text-[#A0A0A0]`}>
            <button> <MdOutlineEmojiEmotions className='text-3xl m-2 ' /></button>
            <button onClick={() => {
                console.log('attachment')
            }}><IoIosAttach className='text-3xl m-2' /></button>
            <input className={`outline-none ${mode ? 'bg-[#121212] hover:bg-[#1f1212]/90 focus:bg-[#121212]   border-[#121231]' : 'bg-[#ffffff] hover:bg-[#ffffef]/90 focus:bg-[#fffff1]   border-[#bbbbbb] outline-none'} w-full border-2 rounded-xl p-2 focus:outline-0`} type='text' />
            <button onClick={() => {
                console.log('clicked send')
            }} className=''><IoSend className='m-2 text-2xl ' /></button>
        </div>
    )
}
