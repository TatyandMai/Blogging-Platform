const express = require("express");
const router = express.Router();

const User = require("../models/User");

//register
router.post("/register", async (req, res) => {
    try{
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const usre = await newUser.save();
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json(err);
    }
});


//login
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email }); // find user information by email
        if(!user)
        return res.json({message:"Incorrect username or password", status: false});
        
        


    }catch(err){
        return res.status(500).json(err);
    }
});


module.exports =router;