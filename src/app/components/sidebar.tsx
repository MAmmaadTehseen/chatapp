'use client'
import React, { useState } from 'react';
import { BsAlexa } from "react-icons/bs";
import {
    ContainerOutlined,
    MenuUnfoldOutlined,
    MessageOutlined,
    OpenAIOutlined,
    InboxOutlined,
    PhoneOutlined,
    StarOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];



const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const items1: MenuItem[] = [
        { key: '1', icon: <MenuUnfoldOutlined />, label: '', onClick: () => toggleCollapsed() },
        { key: '2', icon: <MessageOutlined />, label: 'Chats' },
        { key: '3', icon: <PhoneOutlined />, label: 'Calls' },
        { key: '4', icon: <ContainerOutlined />, label: 'Status' },
        {
            key: '5', icon: <BsAlexa />
            , label: 'Meta AI'
        },

    ];
    const items2: MenuItem[] = [
        { key: '6', icon: <StarOutlined />, label: 'Starred messages' },
        { key: '7', icon: <InboxOutlined />, label: 'Archived chats' },
        { key: '8', icon: <SettingOutlined />, label: 'Settings' },
        { key: '9', icon: <UserOutlined />, label: 'Profile' },


    ];
    return (
        <div className='h-screen flex flex-col justify-between   ' style={{ background: "#001529", maxWidth: 180 }} >
            <div >

                <Menu
                    defaultSelectedKeys={['2']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items1}
                />
            </div>


            <div >

                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items2}
                />
            </div>
        </div>
    );
};

export default Sidebar;