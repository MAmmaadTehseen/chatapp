'use server'

import { connectDB } from "../lib/mongoDB";
import User from "../app/api/model/User";
import bcrypt from "bcryptjs";
import { Phone } from "@mui/icons-material";

export const register = async (values: any) => {
    const { email, password, name,phone } = values;

    try {
        await connectDB();
        const userFound = await User.findOne({ email });
        if (userFound) {
            return {
                error: 'Email already exists!'
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            phone:phone
        });
        const savedUser = await user.save();

    } catch (e) {
        console.log(e);
    }
}