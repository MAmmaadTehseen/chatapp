import { connectDB } from "@/lib/mongoDB";
import Chat from "@/app/api/model/Chat";
import { NextResponse } from "next/server";

export async function GET() {


    try {
        await connectDB();
        const chatFound = await Chat.find();
        // console.log(userFound)
        return NextResponse.json({chatFound})

    } catch (e) {
        console.log(e);
    }
}