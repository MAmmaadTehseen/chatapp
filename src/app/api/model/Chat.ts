import  mongoose, { Schema, model } from  "mongoose";
export interface ChatDocument {
    _id: string;
    users: [Schema.Types.ObjectId];
    createdAt: Date;
    updatedAt: Date;
  }
  const ChatSchema = new Schema<ChatDocument>({
    
    users: {type: [Schema.Types.ObjectId],ref:'users', required: true },
   
  },
  {
    timestamps: true,
  }
);

const  Chat  =  mongoose.models?.Chat  ||  model<ChatDocument>('Chat', ChatSchema);
export  default  Chat;