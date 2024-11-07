import { connectDB } from "@/lib/mongoDB";
import Chat from "@/app/api/model/Chat";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";


export async function GET(req,context) {


    try {
        await connectDB();
        const id =  context.params.id
        const chatFound = await Chat.aggregate([
            
            {
                $lookup: {
                    from: "users",
                    localField: "users",
                    foreignField: "_id",
                    as: "userFound"
                },
               
            },
            // {
            //     $unwind: "$userFound"
            // }
        ])
        const chat = chatFound.filter((chat) =>chat.users[0].toString()==id||chat.users[1].toString()==id  );
        console.log(chat)
        return NextResponse.json(chat)

    } catch (e) {
        console.log(e);
        return NextResponse.json({e})
    }
}