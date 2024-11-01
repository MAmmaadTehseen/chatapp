import  mongoose, { Schema, model } from  "mongoose";
export interface Message {
    _id: string;
    text: string;
chatId:string;
    createdAt: Date;
    updatedAt: Date;
  }
  const MessageSchema = new Schema<Message>({
    text: {
      type: String,
      required: [true, "Message is required"],
     
    },
    chatId: {
      type: String,
      required: [true, "ID is required"],
     
    },
   
  },
  {
    timestamps: true,
  }
);

const  Message  =  mongoose.models?.Message  ||  model<Message>('Message', MessageSchema);
export  default  Message;