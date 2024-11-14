import { connectDB } from "@/lib/mongoDB";
import Chat from "@/app/api/model/Chat";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";


export async function GET(req, context) {


    try {
        await connectDB();
        const id = context.params.id
        const chatFound = await Chat.aggregate([

            // {
            //     $match: {
            //       users: id, // Match chats that include the specified user
            //     },
            //   },
            {
                $lookup: {
                    from: 'messages', // Join with the messages collection
                    localField: '_id',
                    foreignField: 'chatId',
                    as: 'messages',
                },
            },
            {
                $lookup: {
                    from: 'users', // Join with the users collection
                    localField: 'users',
                    foreignField: '_id',
                    as: 'usersDetails',
                },
            },

            {
                $project: {
                    _id: 1,
                    users: {
                        $filter: {
                            input: '$usersDetails',
                            as: 'users',
                            cond: { $ne: ['$$users._id', id] }, // Exclude the current user
                        },
                    },
                    lastMessage: {
                        $arrayElemAt: ['$messages', -1], // Get the last message
                    },
                },
            },
            //   {
            //     $project: {
                 
            //       users: 1,
            //       lastMessage: {
            //         senderId: '$lastMessage.senderId',
            //         content: '$lastMessage.content',
            //         timestamp: '$lastMessage.timestamp',
            //       },
            //     },
            //   },

        ])
        // const chat = chatFound.filter((chat) =>chat.users[0]._id.toString()==id||chat.users[1]._id.toString()==id  )
        // console.log(chat)
        return NextResponse.json(chatFound)

    } catch (e) {
        console.log(e);
        return NextResponse.json({ e })
    }
}