import React from 'react'
import { Avatar, Button } from 'antd';
import { useSelector } from 'react-redux'
import { PhoneTwoTone, VideoCameraTwoTone } from '@ant-design/icons';

export default function ChatBoxhead(props: any) {
    const { user } = props;
    const mode = useSelector((state: any) => state.mode.value);

    return (
        <div className={`h-16 flex justify-between min-w-80 ${mode?'bg-[#006d88] text-white':'bg-[#DFDFDF] text-black'} `}>
            <div className='p-2'>
                <Avatar src={user[0].image} size={50} />
            </div>
            <div className='  m-3 mr-3 font-bold text-2xl '>
                {user[0].name}
            </div>
                <div className={`flex  m-4 h-14   rounded-xl  `}>
                    <Button className='border-none bg-[#DFDFDF]'> <PhoneTwoTone twoToneColor="#515151"   className=' mx-4 text-3xl'  /></Button>
                    <Button className='border-none bg-[#DFDFDF]'><VideoCameraTwoTone twoToneColor="#515151"  className=' text-3xl ' /></Button>
                </div>

           
        </div>
    )
}
