const User = require("../Models/User")

//update user
const updateUser = async (req, res) => { // :id = params.id
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            return res.status(200).json("Account has been updated");
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403)
        .json("You can update only your account");
    }
};

//delete user
const deleteUser = async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            return res.status(200).json("Account has been deleted");
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403)
        .json("You can delete only your account");
    }
};

//get a user from query
const getUser = async(req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username: username });
        const { password, updatedAt, ...other } = user._doc;  //get a user information except for password and updatedAt
        return res.status(200).json(other);
    }catch(err){
        return res.status(500).json(err)
    }
}

//follow a user
const followUser = async (req, res) => { // :id = params.id
    if(req.body.userId !== req.params.id) { //req.body.userId = my id / req.params.id = someone's id
        try{
            const user = await User.findById(req.params.id); //user = someone that I want follow
            const currentUser = await User.findById(req.body.userId); // currentUser = current logged in user(me)

            if(!user.followers.includes(req.body.userId)){  //if user(someone) doesn't include currentUser(me) as follower,
                await user.updateOne({ $push: {followers: req.body.userId} }); //push my id inside other's followers. update only other's followers array
                await currentUser.updateOne({ $push: {followings: req.params.id} }); //push other's id inside my following . update only my following array
                return res.status(200).json("User has been followed")
            }else{
                return res.status(403).json("You already followed this user")
            }
        }catch(err){
            return res.status(500).json(err);
        }
    }else{ // req.body.userId ==== req.params.id = my id
        return res.status(403).json("You can't follow yourself")
    }
}

//unfollow a user
const  unfollowUser = async (req, res) => { // :id = params.id
    if(req.body.userId !== req.params.id) { //req.body.userId = my id / req.params.id = someone's id
        try{
            const user = await User.findById(req.params.id); //user = someone that I want follow
            const currentUser = await User.findById(req.body.userId); // currentUser = current logged in user(me)
            if(user.followers.includes(req.body.userId)){  //if user(someone) includes currentUser(me) as follower,
                await user.updateOne({ $pull: {followers: req.body.userId} }); //remove my id from other's followers. update only other's followers array
                await currentUser.updateOne({ $pull: {followings: req.params.id} }); //remove other's id from my following . update only my following array
                res.status(200).json("User has been unfollowed")
            }else{
                res.status(403).json("You don't follow this user")
            }
        }catch(err){
            return res.status(500).json(err);
        }
    }else{ // req.body.userId ==== req.params.id = my id
        return res.status(403).json("You can't unfollow yourself")
    }
}

module.exports = { updateUser, deleteUser, followUser, unfollowUser, getUser};

