import { connectDB } from "@/lib/mongoDB";
import Message from "@/app/api/model/Message";
import { NextResponse } from "next/server";

export async function GET(req,context) {

    const id =  context.params.id

    try {
        await connectDB();
        const MessageFound = await Message.find({chatId:id});
        return NextResponse.json({MessageFound})

    } catch (e) {
        console.log(e);
    }
}