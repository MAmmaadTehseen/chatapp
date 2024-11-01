import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useSelector } from 'react-redux'

export default function chatBoxFooter() {
    const mode = useSelector((state: any) => state.mode.value);

    return (
        <div className={`h-12 flex ${mode ? 'bg-[#006d88] text-white' : 'bg-gray-400 text-black'}`}>
            <button> <MdOutlineEmojiEmotions className='text-3xl m-2 ' /></button>
            <button onClick={() => {
                console.log('attachment')
            }}><IoIosAttach className='text-3xl m-2' /></button>
            <input className={`${mode ? 'bg-[#006d88] hover:bg-[#006d88]/90 focus:bg-[#005d88]   border-[#006d00]' : 'bg-[#97a2a6] hover:bg-[#97a2a6]/90 focus:bg-[#97a2a6]   border-[#6f6f6e]'} w-full border-2 rounded-xl p-2 focus:outline-0`} type='text' />
            <button onClick={() => {
                console.log('clicked send')
            }} className=''><IoSend className='m-2 text-2xl ' /></button>
        </div>
    )
}
