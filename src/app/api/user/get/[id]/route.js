import { connectDB } from "@/lib/mongoDB";
import User from "@/app/api/model/User";
import { NextResponse } from "next/server";

export async function GET(req,context) {


    try {
        await connectDB();
        const id =  context.params.id
        const userFound = await User.findOne({_id:id});
        // console.log(userFound)
        return NextResponse.json({userFound})

    } catch (e) {
        console.log(e);
        return NextResponse.json({e})
    }
}