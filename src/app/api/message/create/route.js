import Message from "@/app/api/model/Message";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoDB";

export async function POST(req) {
    try {
        connectDB()
        let reqData = await req.json()
        let createMessage = await Message.create({ chatId: reqData.chatId,text:reqData.text, })
        console.log('wait')
        return NextResponse.json(createMessage)
    }
    catch (error) {
        console.log(error)
        return NextResponse.json('error')
    }



}