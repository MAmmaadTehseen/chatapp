import Image from 'next/image'
import { MdDone } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";

import React from 'react'
import {
    EditOutlined,
    MenuOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';
import { IconContext } from 'react-icons';
const chats = [
    {
        user: "ammad khan",
        userID: "001",
        lastMessage: "hi there",
        timestamp: "2024-08-15T16:25:36.618+00:00",
        image: "https://ix-www.imgix.net/case-study/unsplash/unsplash02.jpg?ixlib=js-3.8.0&auto=compress%2Cformat&w=1446",
        status: "delivered",
        unread: false,

    },
    {
        user: "moazzam ali",
        userID: "002",
        lastMessage: "done",
        timestamp: "2023-08-16T16:25:36.618+00:00",
        image: "https://ix-www.imgix.net/case-study/unsplash/unsplash02.jpg?ixlib=js-3.8.0&auto=compress%2Cformat&w=1446",
        status: "recived",
        unread: false,

    },
    {
        user: "zaid bin naeem",
        userID: "003",
        lastMessage: "ok i will be there also before coming contact me al well , in case i forget",
        timestamp: "2024-07-16T16:25:36.618+00:00",
        image: "https://ix-www.imgix.net/case-study/unsplash/unsplash02.jpg?ixlib=js-3.8.0&auto=compress%2Cformat&w=1446",
        status: "recived",

    },
    {
        user: "abdul sattar",
        userID: "004",
        lastMessage: "Woodpeeker",
        timestamp: "2024-08-27T12:00:36.618+00:00",
        image: "https://ix-www.imgix.net/case-study/unsplash/unsplash02.jpg?ixlib=js-3.8.0&auto=compress%2Cformat&w=1446",
        status: "read",

    },
    {
        user: "namatullah",
        userID: "005",
        lastMessage: "neend ari ha",
        timestamp: "2024-08-27T06:25:36.618+00:00",
        image: "https://ix-www.imgix.net/case-study/unsplash/woman-hat.jpg?ixlib=js-3.8.0&w=400&auto=compress%2Cformat&dpr=1&q=75",
        status: "sent",

    },
    {
        user: "m mohsin",
        userID: "006",
        lastMessage: "academy jara hu",
        timestamp: "2024-08-16T16:05:36.618+00:00",
        image: "",
        status: "read",

    },
]
export default function chatMenu() {
    return (
        <div className='w-80 bg-gray-900 h-screen'>

            <header className='flex justify-between'>
                <div>
                    <h1 className='text-2xl text-gray-400 font-bold p-4'>chats</h1>
                </div>
                <div className='p-4'>
                    <button className='px-2 py-3'>
                        <EditOutlined className='text-white' />
                    </button>
                    <button className='px-2 py-3'>
                        <MenuOutlined className='text-white' />
                    </button>
                </div>
            </header>
            <main>
                {chats.length > 0 &&
                    chats.sort((a, b) => (new Date() - new Date(a.timestamp)) - (new Date() - new Date(b.timestamp))).map(chat => {
                        const getDateOrDay = (timestamp) => {
                            const now = new Date(timestamp);
                            const hours = new Date() - now;
                            console.log(now.getFullYear())
                            if (Math.abs(hours / 24 / 3600 / 1000) < 1 && now.getDate() === new Date().getDate() && now.getMonth() === new Date().getMonth() && now.getFullYear() === new Date().getFullYear()) {
                                return now.toLocaleTimeString(); // Returns the day of the week
                            } else {
                                return now.toLocaleDateString(); // Returns the date in a readable format
                            }
                        }


                        return (
                            <div key={chat.userID} className='flex items-center p-4 hover:bg-gray-800'>
                                <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} src={chat.image && <img src={chat.image} />} alt={chat.user[0].toUpperCase()} />
                                <div className='ml-4'>
                                    <div className='flex justify-stretch'>
                                        <h2 className='text-sm text-gray-400 font-bold'>{chat.user}</h2>
                                        <p className='text-xs text-gray-500 p-1'>{getDateOrDay(chat.timestamp)}</p>
                                    </div>
                                    <div className={'flex flex-row justify-start'}>
                                        <div className={`p-1 `}>{chat.status === 'sent' ? <MdDone color="white" /> : chat.status === 'delivered' ? <MdDoneAll color="white" /> : chat.status === 'read' ? <MdDoneAll color="blue" /> : ""}</div>
                                        <p className='text-sm text-gray-500'>{chat.lastMessage.length > 28 ? chat.lastMessage.slice(0, 35) + "...." : chat.lastMessage}</p>
                                    </div>
                                </div>
                            </div>)
                    }
                    )}
                {chats.length < 1 &&
                    <div className='text-center text-gray-500 p-1 flex h-full justify-center items-center flex-col'>
                        <h1 className='mb-6'>
                            No Chats
                        </h1>
                        <h2 className='text-yellow-100'>
                            click the button below to start
                        </h2>
                        <button className='border border-gray-500 rounded-lg w-20 p-1 mt-2 bg-white'>New Chat</button>
                    </div>
                }

            </main>
        </div>
    )
}