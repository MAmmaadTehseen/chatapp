import { connectDB } from "@/lib/mongoDB";
import User from "@/app/api/model/User";
import { NextResponse } from "next/server";

export async function GET() {


    try {
        await connectDB();
        const userFound = await User.find();
        return NextResponse.json(userFound)

    } catch (e) {
        console.log(e);
    }
}