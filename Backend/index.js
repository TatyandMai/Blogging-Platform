const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

require("dotenv").config();

const auth = require("./Routes/auth");
const users = require("./Routes/users");
const posts = require("./Routes/posts");

app.use("/api/auth", auth); // route to login, register
app.use("/api/users", users); //route to users
app.use("/api/posts", posts); //route to posts


//connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connection is Successful");
}).catch((error)=>{
    console.log(error)
});


app.listen(3000, () => {console.log("Server is running");});