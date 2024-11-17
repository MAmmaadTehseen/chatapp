'use client'
import React, { useEffect, useState } from 'react'
import { MdDone } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { SearchOutlined, EditOutlined, MenuOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Menu, MenuProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { changeChat } from '../slices/chatSlice';
import { FloatButton } from 'antd';
import Image from 'next/image';
import { Key } from '@mui/icons-material';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { any } from 'prop-types';
import { useSession } from 'next-auth/react';
import { revalidatePath } from 'next/cache';
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
    const { data: session } = useSession();
    const { Search } = Input;
    const mode = useSelector((state: any) => state.mode.value);
    const chat = useSelector((state: any) => state.chat.value);
    const [users, setUsers] = useState([])
    const [Chats, setChats] = useState([])
    const [filteredUser, setFilteredUser] = useState([])
    const dispatch = useDispatch();
    async function getAllUsers() {
        // fetch all users from server
        const req = await fetch('/api/user/getAll', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await req.json();
        setUsers(data)
        setFilteredUser(data.filter((user: any) => user._id != session?.user.id))
    }
    async function getAllChats() {
        // fetch all chats from server
        const req = await fetch(`/api/chat/getUserChats/${session?.user.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await req.json();
        setChats(data)
    }
    useEffect(() => {
        getAllUsers()
        getAllChats()

    }, [])
    async function createChat(id: string) {
        const req = await fetch(`/api/chat/create`, {
            method: 'POST',

            body: JSON.stringify({ users: [session?.user.id, id] })
        })
        dispatch(changeChat(id))
        getAllChats()
    }
    // Function to create menu items based on users
    const createMenuItems = (filteredUser: any) => {
        return filteredUser.map((user: any) => (
            {
                label:
                    <div>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                    </div>,
                key: user._id,
                onClick: (() => createChat(user._id))
            }
        ));
    }
    // Create the menu
    const items =

        filteredUser.length > 0 ? (
            createMenuItems(filteredUser)
        ) : (
            [{
                label: 'No Users!',
                key: '00',
                disabled: true
            }]
        )




    const onSearch: SearchProps['onSearch'] = async (value: string) => {

        const filter = users?.filter((user: any) => (((user.email.includes(value)) || (user.name.includes(value))) && user._id != session?.user.id))
        setFilteredUser(filter)
    };


    return (
        <div className={` overflow-scroll scrollbar-hide sm:w-80 h-screen min-w-80 ${mode ? 'bg-[#121212] text-white' : 'bg-[#FFFFFF] text-black'}`}>

            <header className={` sm:w-80 min-w-80 right-0 left-10  fixed  dark:bg-[#121212] dark:text-white bg-[#FFFFFF] text-black z-50 `}>
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
                <Dropdown menu={{ items }} trigger={['hover']}>
                    <div className='flex justify-end'>
                        <Search placeholder="Enter User E-mail or Name" onChange={(e) => onSearch(e.target.value)} className={` sm:w-72  p-2 m-2 border  rounded-xl outline-none`} />
                    </div>
                </Dropdown>
            </header>
            <main className=' mt-32 '>
                {Chats.length > 0 &&
                    Chats.sort((a: any, b: any) => new Date(b.chat.updatedAt).getTime() - new Date(a.chat.updatedAt).getTime()).map((chat: any) => {
                        const num = '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
                        const getDateOrDay = (timestamp: string) => {
                            const now = new Date(timestamp);
                            const hours = new Date().getTime() - now.getTime();
                            if (Math.abs(hours / 24 / 3600 / 1000) < 1 && now.getDate() === new Date().getDate() && now.getMonth() === new Date().getMonth() && now.getFullYear() === new Date().getFullYear()) {
                                return now.toLocaleTimeString(); // Returns the day of the week
                            } else {
                                return now.toLocaleDateString(); // Returns the date in a readable format
                            }
                        }


                        return (
                            <div key={chat._id}>
                                <div onClick={() => {

                                    dispatch(changeChat(chat.chat.chatID))
                                }
                                } className={`flex items-center p-2 w-screen ${mode ? 'hover:bg-gray-800' : 'hover:bg-blue-200'}  border-b-gray-300 m-2 min-w-64 `} >

                                    <Avatar style={{ backgroundColor: '#0002aa' }} src={chat.users.image && <Image src={chat.users.image} alt='DP' />} alt={chat.users.name[0].toUpperCase()} size={50} >{chat.users.name[0].toUpperCase()} </Avatar>
                                    <div className='ml-2  w-full sm:w-80 '>
                                        <div className='flex  justify-between '>
                                            <h2 className='text-sm   font-bold'>{chat.users.name}</h2>

                                            <p className='text-xs text-gray-500   p-1 mx-3 mr-20 '>{getDateOrDay(chat.chat.updatedAt)}</p>
                                        </div>
                                        <div className={'flex flex-row justify-start'}>
                                            {chat?.lastMessage.text &&
                                                <p className={`text-sm   line-clamp-1 pr-3 ${mode ? 'text-[#A0A0A0]' : 'text-[#A0A0A0]'}`}>{chat.lastMessage.text}</p>}
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
                            Search to Add Chats
                        </h2>

                    </div>
                }

            </main>
        </div>
    )
}
