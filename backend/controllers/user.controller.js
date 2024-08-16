<<<<<<< HEAD
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
=======
import User from "../models/user.model.js"

export const getUsersForSidebar= async (req, res) => {
    try{
        const loggedInUser= req.user._id;
        const filteredUsers= await User.find({ _id: { $ne: loggedInUser}}).select("-password");//select all users except the logged in user
        res.status(200).json(filteredUsers);
        
    }catch(error){
        console.log("Error in getUsersForSidebar controller!",error.message);
        res.status(500).json({error:"Internal Server Error!"})
    }
}

>>>>>>> a9c3ec4 (Backend created)
