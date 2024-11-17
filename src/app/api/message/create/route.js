import Message from "@/app/api/model/Message";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoDB";

export async function POST(req) {
    try {
        connectDB()
        let reqData = await req.json()
        let createMessage = await Message.create({ chatId: reqData.chatId,text:reqData.text,reciver:reqData.reciver,sender:reqData.sender,status:reqData.status })
        return NextResponse.json(createMessage)
    }
    catch (error) {
        return NextResponse.json('error')
    }



}