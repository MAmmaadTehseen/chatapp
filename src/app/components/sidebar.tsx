'use client'
import React, { useEffect, useState } from 'react';
import { BsAlexa } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../slices/modeSlice';
import { changeChat } from '../slices/chatSlice';
import {
    ContainerOutlined,
    MenuUnfoldOutlined,
    MessageOutlined,
    PhoneOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, ConfigProvider, Menu, Switch } from 'antd';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import '@/app/globals.css'
type MenuItem = Required<MenuProps>['items'][number];



const Sidebar: React.FC = () => {
    const router = useRouter()
    const [key, setKey] = useState("1");
    const { status } = useSession();
    const mode = useSelector((state: any) => state.mode.value);

console.log(mode)
    const dispatch = useDispatch();
    const pathname = usePathname();
    const searchParams = useSearchParams()
    useEffect(() => {
        if (pathname == '/') {
            setKey('1')
        }
        else if (pathname == '/call') {
            setKey('2')
        }
        else if (pathname == '/status') {
            setKey('3')
        }
        else if (pathname == '/setting') {
            setKey('5')
        }
        else if (pathname == '/profile') {
            setKey('6')
        }


    }, [pathname])

    const items1: MenuItem[] = [

        {
            key: '1', icon: <MessageOutlined />, label: 'Chats', onClick: () => {
                dispatch(changeChat(""))
                router.push("/")
            
            }
        },
        {
            key: '2', icon: <PhoneOutlined />, label: 'Calls', onClick: () => {
                router.push("/call")
                console.log(pathname)
            }
        },
        {
            key: '3', icon: <ContainerOutlined />, label: 'Status', onClick: () => {
                router.push("/status")
                console.log(pathname)
            }
        },


    ];
    const items2: MenuItem[] = [

        {
            key: '4', icon: <Switch size='small' value={mode} />, label: 'Dark Mode', onClick: () => {
                // router.push("/setting")
                console.log('dark mode switch')
                dispatch(changeMode())
            }
        },
        {
            key: '5', icon: <SettingOutlined />, label: 'Settings', onClick: () => {
                router.push("/setting")
            }
        },
        {
            key: '6', icon: <UserOutlined />, label: 'Profile', onClick: () => {
                router.push("/profile")
            }
        },


    ];
    if (status != "authenticated") {
        return (
            <>
            </>
        )
    }
    else {


        return (
            <ConfigProvider
                theme={{
                    token: {
                        // Seed Token
                        colorPrimary: '#00b96b',
                        borderRadius: 2,

                        // Alias Token
                    },
                }}
            >
                <div className={`h-screen flex w-10 flex-col justify-between ${mode?'bg-[#006d77]':'bg-white'} `}  >
                    <div>
                        <Menu
                            selectedKeys={[key]}
                            mode="inline"
                            theme={mode?"dark":"light"}
                            items={items1}
                            inlineCollapsed={true}
                            style={{ backgroundColor:mode?'#006d77':'#ffffff', width: "40px" }}
                        />
                    </div>


                    <div >

                        <Menu
                            selectedKeys={[key]}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme={mode?"dark":"light"}
                            inlineCollapsed={true}
                            items={items2}
                            style={{ backgroundColor:mode?'#006d77':'#ffffff', width: "40px" }}
                        />
                    </div>
                </div>

            </ConfigProvider>
        );
    }
};

export default Sidebar;