import React, { useEffect, useRef } from 'react'
import { MdDone } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { useSelector } from 'react-redux'

export default function chatBoxMain(props: any) {
    let { msg } = props
    const mode = useSelector((state: any) => state.mode.value);
    const dummy = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        dummy?.current?.scrollIntoView({});
    }, [msg]);


    return (


        <div className={`flex flex-col  ${mode ? 'text-white' : 'text-black '}`}>
            {
                msg.map((msg: any) => {

                    return (
                        <div key={msg.id}>
                            {
                                msg.status != "recived" &&
                                <div className='flex justify-end '>
                                    <div className={`ml-28 flex flex-col border   rounded-lg w-fit px-1 m-0.5 mx-2 ${mode ? ' bg-green-700/60 border-green-700 ' : ' bg-green-300/60 border-green-300'}  `}>
                                        <div className='block mr-3'> {msg.text}</div>
                                        <div className='flex justify-end items-end  '>
                                            
                                        <p className=' flex justify-end items-end  text-xs'>{msg.timestamp.toLocaleTimeString().slice(0,5)}</p>
                                        <div className=' flex justify-end items-end ml-1'>{msg.status === 'sent' ? <MdDone color="white" /> : msg.status === 'delivered' ? <MdDoneAll color="white" /> : msg.status === 'read' ? <MdDoneAll color="blue" /> : ""}</div>
                                        </div>

                                        
                                    </div>
                                </div>
                            }
                            {
                                msg.status == "recived" &&
                                <div className='flex justify-start '>
                                    <div className={`mr-28 flex  border rounded-lg w-fit px-1 m-0.5 mx-2  ${mode ? ' bg-blue-700/70 border-blue-700 ' : ' bg-slate-300/60 border-slate-300'} flex-col`}>
                                        <div className='block mr-4'> {msg.text}</div>
                                        <p className=' flex  justify-end items-end  text-xs'>{msg.timestamp.toLocaleTimeString().slice(0,5)}</p>
                                        <div className='px-1 flex justify-end items-end'></div>
                                    </div>
                                </div>
                            }
                            <div ref={dummy} />
                        </div>
                    )
                })
            }
        </div>

    )
}
