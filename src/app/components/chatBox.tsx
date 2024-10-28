import React from 'react'
import ChatBoxhead from './chatBoxHeader'
import ChatBoxMain from './chatBoxMain'
import ChatBoxFooter from './chatBoxFooter'
const msg = [
    {
        id: 114,
        text: 'hi sadfsadasdsadsad adscsadasd',
        status: 'recived',
        timestamp: new Date(),
    },
    {
        id: 2,
        text: 'hi dcas asd',
        status: 'read',
        timestamp: new Date(),
    },
    {
        id: 3,
        text: 'hi as',
        status: 'read',
        timestamp: new Date(),
    },
    {
        id: 4,
        text: 'hi',
        status: 'recived',
        timestamp: new Date(),
    },
    {
        id: 5,
        text: 'hsadasd asda i',
        status: 'delivered',
        timestamp: new Date(),
    },
    {
        id: 6,
        text: 'hdasd sdfcsdfcc i',
        status: 'recived',
        timestamp: new Date(),
    },
    {
        id: 7,
        text: 'hi sdf csd swd csd sdv vsds s sdsd fcs dfs dfsdf sdfs fsd fsfsd sfd sdfsfs fsfs svsdfvsdfsfsfsf svsdvsf',
        status: 'recived',
        timestamp: new Date(),
    },
    {
        id: 8,
        text: 'hi ds',
        status: 'sent',
        timestamp: new Date(),
    },
    {
        id: 9,
        text: 'hisdfsd sdfgvsdgfs',
        status: 'sent',
        timestamp: new Date(),
    },
    {
        id: 10,
        text: 'hi lorem da/dk ad kald kad lkas; sdk ate rt ete ad;adma;ld;lad;ald;lm',
        status: 'sent',
        timestamp: new Date(),
    }
]
const user = [{
    id: 1,
    name: 'admin',
    image: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
}]

export default function chatBox() {
    return (
        <div className='bg-blue-950 pl-10 h-screen flex flex-col justify-between'>
            <div>
                <ChatBoxhead user={user}/>
            </div>
            <div className='bg-blue-500 grow'>
                <ChatBoxMain msg={msg}/>
            </div>
            <div>
                <ChatBoxFooter/>
            </div>
        </div>
    )
}
