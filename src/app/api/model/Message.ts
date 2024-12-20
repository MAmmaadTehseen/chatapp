import  mongoose, { Schema, model } from  "mongoose";
export interface Message {
    _id: string;
    text: string;
    status:string;
    sender:Schema.Types.ObjectId;
    reciver:Schema.Types.ObjectId;
    chatId:Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
  }
  const MessageSchema = new Schema<Message>({
    text: {
      type: String,
      required: [true, "Message is required"],
     
    },
    chatId: {
      type: Schema.Types.ObjectId,
      required: [true, "ID is required"],
     
    },
    reciver: {
      type: Schema.Types.ObjectId,
      required: [true, "reciver ID is required"],
     
    },
    sender: {
      type: Schema.Types.ObjectId,
      required: [true,  "Sender ID is required"],
     
    },
    status:{
      type:String,
      
    }
   
  },
  {
    timestamps: true,
  }
);

const  Message  =  mongoose.models?.Message  ||  model<Message>('Message', MessageSchema);
export  default  Message;