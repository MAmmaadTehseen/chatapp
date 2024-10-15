import React from 'react'
import { CiVideoOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Avatar } from 'antd';
export default function chatBoxhead(props: any) {
    const { user } = props;
    console.log(user)
    return (
        <div className='h-16 flex justify-between'>
            <div className='p-2'>
                <Avatar src={user[0].image} size={50} />
            </div>
            <div className='text-white flex m-3 font-bold text-2xl justify-start grow'>
                {user[0].name}
            </div>
            <div className='flex'>
                <div className='flex  my-4 h-10  bg-blue-900 rounded-xl p-1 border border-blue-600'>
                    <button> <CiVideoOn className=' mx-2 text-3xl text-white' /></button>
                    <div className='border mx-2 border-l-2'></div>
                    <button><IoCallOutline className=' text-3xl text-white' /></button>
                </div>

                <button><CiSearch className='text-white m-4 text-3xl' /></button>
            </div>
        </div>
    )
}
