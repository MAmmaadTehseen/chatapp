import  mongoose, { Schema, model } from  "mongoose";
export interface ChatDocument {
    _id: string;
    user1: string;
    user2: string;
    createdAt: Date;
    updatedAt: Date;
  }
  const ChatSchema = new Schema<ChatDocument>({
    
    user1: { type: String, required: true },
    user2: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const  Chat  =  mongoose.models?.Chat  ||  model<ChatDocument>('Chat', ChatSchema);
export  default  Chat;