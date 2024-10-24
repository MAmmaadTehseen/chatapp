import React from 'react'
import { MdDone } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
export default function chatBoxMain(props: any) {
    let { msg } = props
    return (


        <div className='flex flex-col'>
            {
                msg.map((msg: any) => {

                    return (
                        <div key={msg.id}>
                            {
                                msg.status != "recived" &&
                                <div className='flex justify-end '>
                                    <div className={`flex border text-white border-green-900 rounded-lg w-fit px-1 m-0.5 mx-2  ${msg.status === "recived" ? "bg-gray-500" : "bg-green-900"}  `}>
                                        <div className=''> {msg.text}</div>
                                        <div className='px-1 flex justify-end items-end'>{msg.status === 'sent' ? <MdDone color="white" /> : msg.status === 'delivered' ? <MdDoneAll color="white" /> : msg.status === 'read' ? <MdDoneAll color="blue" /> : ""}</div>
                                    </div>
                                </div>
                            }
                            {
                                msg.status == "recived" &&
                                <div className='flex justify-start '>
                                    <div className={`text-white border border-blue-900 rounded-lg w-fit px-1 m-0.5 mx-2  ${msg.status === "recived" ? "bg-blue-900" : "bg-green-600"}  `}>
                                        <div className=''> {msg.text}</div>
                                        <div className='px-1 flex justify-end items-end'>{msg.status === 'sent' ? <MdDone color="white" /> : msg.status === 'delivered' ? <MdDoneAll color="white" /> : msg.status === 'read' ? <MdDoneAll color="blue" /> : ""}</div>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>

    )
}
