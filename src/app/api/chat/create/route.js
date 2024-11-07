import Chat from "@/app/api/model/Chat";
import { NextResponse } from "next/server";0
import { connectDB } from "@/lib/mongoDB";

export async function POST(req) {
    try {
        connectDB()
        let reqData = await req.json()
let Chats=await Chat.find({users:reqData.users,})
if(Chats[0]?.users.includes(reqData.users[0]) && Chats[0].users.includes(reqData.users[1])){

return NextResponse.json({error:"chat already exists"},{status:400})    
}
        let createChat = await Chat.create({ users: reqData.users, })
        return NextResponse.json(createChat)
    }
    catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }



}