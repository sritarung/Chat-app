import mongoose from "mongoose";

<<<<<<< HEAD
const messageSchema = new mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		// createdAt, updatedAt
	},
	{ timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
=======
const messageSchema= new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{timestamps: true})

const Message= mongoose.model("Message",messageSchema);
export default Message;
>>>>>>> a9c3ec4 (Backend created)
