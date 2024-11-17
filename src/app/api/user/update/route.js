import { NextResponse } from "next/server";
import User from "@/app/api/model/User";
import { connectDB } from "@/lib/mongoDB";

export async function PUT(req) {
    try {
        connectDB()
        let { id, ...reqData } = await req.json()

        let newUser = {}
        if (reqData.name) { newUser.name = reqData.name }
        if (reqData.image) { newUser.image = reqData.image }

        if (reqData.isCustom) { newUser.isCustom = reqData.isCustom }
        if (reqData.UserFamilyId) { newUser.UserFamilyId = reqData.UserFamilyId }

        let updatedUser = await User.findByIdAndUpdate(id, { $set: newUser })
        return NextResponse.json(updatedUser)

    }
    catch (error) {
        return NextResponse.json(error)
    }

}