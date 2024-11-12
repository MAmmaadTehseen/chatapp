import React, { useEffect } from 'react'
import { MdDone } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { SearchOutlined, EditOutlined, MenuOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { changeChat } from '../slices/chatSlice';
import { FloatButton } from 'antd';
import Image from 'next/image';

const chats = [
    {
        user: "Ammad khan",
        userID: "001",
        lastMessage: "hi there",
        timestamp: "2024-11-06T16:25:36.618+00:00",
        image: "https://ix-www.imgix.net/case-study/unsplash/unsplash02.jpg?ixlib=js-3.8.0&auto=compress%2Cformat&w=1446",
        status: "delivered",
        unread: false,

    },
    {
        user: "Moazzam ali",
        userID: "002",
        lastMessage: "done",
        timestamp: "2023-08-16T16:25:36.618+00:00",
        image: "https://ix-www.imgix.net/case-study/unsplash/unsplash02.jpg?ixlib=js-3.8.0&auto=compress%2Cformat&w=1446",
        status: "recived",
        unread: false,

    },
    {
        user: "Zaid bin naeem",
        userID: "003",
        lastMessage: "ok i will be there also before coming contact me fs fsd fsd fs dfs df sdf sd f dsf s f sdf ds f sdf sdf al well , in case i forget",
        timestamp: "2024-07-16T16:25:36.618+00:00",
        image: "https://ix-www.imgix.net/case-study/unsplash/unsplash02.jpg?ixlib=js-3.8.0&auto=compress%2Cformat&w=1446",
        status: "recived",

    },
    {
        user: "Abdul sattar",
        userID: "004",
        lastMessage: "Woodpeeker",
        timestamp: "2024-08-28T12:00:36.618+00:00",
        image: "https://ix-www.imgix.net/case-study/unsplash/unsplash02.jpg?ixlib=js-3.8.0&auto=compress%2Cformat&w=1446",
        status: "read",

    },

    {
        user: "Namatullah",
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
export default function ChatMenu() {
    const mode = useSelector((state: any) => state.mode.value);
    const chat = useSelector((state: any) => state.chat.value);
    const dispatch = useDispatch();
    async function getUsers() {
        const users = await fetch('/api/user/getAll', {
            method: 'GET',
        })
        const userFound = await users.json()
    }

    useEffect(() => {
        getUsers()

    }, [mode])
    return (
        <div className={` overflow-scroll scrollbar-hide pr-2 sm:w-80 h-screen min-w-80 ${mode ? 'bg-[#121212] text-white' : 'bg-[#FFFFFF] text-black'}`}>

            <header className={` sm:w-80 min-w-80 w-full fixed  ${mode ? 'bg-[#121212] text-white' : 'bg-[#FFFFFF] text-black'} z-50 `}>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <Image src='/icon.png' width={35} height={10} alt='Logo' className='m-2'></Image>
                        <h1 className='text-2xl  font-bold p-4'>ChatAPP</h1>
                    </div>
                    <div className='p-4'>
                        <Button className='px-2 py-1 bg-primary text-white border-none ' color=''>
                            <EditOutlined />
                        </Button>



                    </div>
                </div>
                <div className='flex justify-end'>
                    <SearchOutlined style={{ fontSize: '24px', color: mode ? '#ABAFB1' : '#ABAFB1' }} className='p-2' />
                    <input type='search' className={` sm:w-72 w-full p-2 m-2 border ${mode ? 'border-[#ABAFB1] bg-[#121212]' : 'border-[#ABAFB1] bg-[#FFFFFF]'} rounded-xl outline-none`} />
                </div>
            </header>
            <main className=' mt-32 '>
                {chats.length > 0 &&
                    chats.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).map(chat => {
                        const getDateOrDay = (timestamp: string) => {
                            const now = new Date(timestamp);
                            const hours = new Date().getTime() - now.getTime();
                            console.log(now.getFullYear())
                            if (Math.abs(hours / 24 / 3600 / 1000) < 1 && now.getDate() === new Date().getDate() && now.getMonth() === new Date().getMonth() && now.getFullYear() === new Date().getFullYear()) {
                                return now.toLocaleTimeString(); // Returns the day of the week
                            } else {
                                return now.toLocaleDateString(); // Returns the date in a readable format
                            }
                        }


                        return (
                            <div key={chat.userID}>
                                <div onClick={() => {

                                    dispatch(changeChat(chat.userID))
                                }
                                } className={`flex items-center p-2 w-full ${mode?'hover:bg-gray-800':'hover:bg-blue-200'}  border-b-gray-300 m-2 min-w-72 `} >

                                    <Avatar style={{ backgroundColor: '#D9D9D9' }} src={chat.image && <img src={chat.image} />} alt={chat.user[0].toUpperCase()} size={50} />
                                    <div className='ml-2  w-full sm:w-80 '>
                                        <div className='flex  justify-between '>
                                            <h2 className='text-sm   font-bold'>{chat.user}</h2>

                                            <p className='text-xs text-gray-500   p-1 mx-3 '>{getDateOrDay(chat.timestamp)}</p>
                                        </div>
                                        <div className={'flex flex-row justify-start'}>
                                            {chat.status != 'recived' && <div className={`p-1 `}>{chat.status === 'sent' ? <MdDone color="gray" /> : chat.status === 'delivered' ? <MdDoneAll color="gray" /> : chat.status === 'read' ? <MdDoneAll color="blue" /> : ""}</div>}
                                            <p className={`text-sm   line-clamp-1 pr-3 ${mode ? 'text-[#A0A0A0]' : 'text-[#A0A0A0]'}`}>{chat.lastMessage}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
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
