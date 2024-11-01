import { connectDB } from "@/lib/mongoDB";
import Chat from "@/app/api/model/Chat";
import { NextResponse } from "next/server";

export async function GET(req,context) {


    try {
        await connectDB();
        const id =  context.params.id
        const chatFound = await Chat.find();
        const chat = chatFound.filter((chat) => chat.users.includes(id) );
        return NextResponse.json({chat})

    } catch (e) {
        console.log(e);
        return NextResponse.json({e})
    }
}