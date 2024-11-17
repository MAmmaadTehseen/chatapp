import Chat from "@/app/api/model/Chat";
import { NextResponse } from "next/server"; 0
import { connectDB } from "@/lib/mongoDB";

export async function POST(req) {
    try {
        connectDB()
        let reqData = await req.json()
        let Chats = await Chat.find()

        const findChat = (Chats.filter((chat) => chat.users.some(items => items.toString() === reqData.users[0]) && chat.users.some(items => items.toString() === reqData.users[1])))
        // check if chat already exists
        if (findChat.length > 0) {

            return NextResponse.json({ error: "chat already exists" }, { status: 400 })
        }
        let createChat = await Chat.create({ users: reqData.users, })
        return NextResponse.json(createChat)
    }
    catch (error) {
        return NextResponse.json(error)
    }



}