import  mongoose, { Schema, model } from  "mongoose";
export interface Message {
    _id: string;
    text: string;
    senderId: string;
    reciverId: string;
    createdAt: Date;
    updatedAt: Date;
  }
  const MessageSchema = new Schema<Message>({
    text: {
      type: String,
      required: [true, "Message is required"],
     
    },
    senderId: {
      type: String,
      required: true
    },
    reciverId: {
      type: String,
      required: [true, "Name is required"]
    }
  },
  {
    timestamps: true,
  }
);

const  Message  =  mongoose.models?.Message  ||  model<Message>('Message', MessageSchema);
export  default  Message;