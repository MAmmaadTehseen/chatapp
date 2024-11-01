import React from 'react'
import { CiVideoOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Avatar } from 'antd';
import { useSelector } from 'react-redux'

export default function chatBoxhead(props: any) {
    const { user } = props;
    const mode = useSelector((state: any) => state.mode.value);

    return (
        <div className={`h-16 flex justify-between min-w-80 ${mode?'bg-[#006d88] text-white':'bg-gray-300 text-black'} `}>
            <div className='p-2'>
                <Avatar src={user[0].image} size={50} />
            </div>
            <div className=' flex m-3 font-bold text-2xl justify-start'>
                {user[0].name}
            </div>
            <div className='flex'>
                <div className={`flex  my-4 h-10   rounded-xl p-1 border ${mode?' border-[#83c5be]':'border-black'}`}>
                    <button> <CiVideoOn className=' mx-2 text-3xl ' /></button>
                    <div className={`${mode?' border-[#83c5be]':'border-black'} mx-2 border-l-2`}></div>
                    <button><IoCallOutline className=' text-3xl ' /></button>
                </div>

                <button><CiSearch className=' m-4 text-3xl' /></button>
            </div>
        </div>
    )
}
