const Users = require("../Models/User");
const bcrypt = require('bcrypt');
const { hashPassword } = require('../Helper/userHelper');

//Register
const registerUser = async(req, res, next) => {
    try{
        const { username, email, password } = req.body;

        const usernameCheck = await Users.findOne({ username });
        if(usernameCheck)
        return res.json({message:"Username is already used", status: false});

        const emailCheck = await Users.findOne({ email });
        if(emailCheck)
        return res.json({message:"Email is already used", status: false});

        const hashedPassword = await hashPassword(password);
        const user = await Users.create({
            username,
            email,
            password: hashedPassword,
        });
        delete user.password;
        return res.json({ status:true, user });
    }catch(ex){
        next(ex);
    }
};

//Login
const loginUser = async(req, res, next) => {
    try{
        const { username, password } = req.body;

        const user = await Users.findOne({ username });
        if(!user)
        return res.json({message:"Incorrect username or password", status: false});

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid)
        return res.json({message:"Incorrect username or password", status: false});

        delete user.password;
        return res.json({ status:true, user });
    }catch(ex){
        next(ex);
    }
};

module.exports = { registerUser, loginUser };
