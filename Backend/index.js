const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

const app = express();

require("dotenv").config();

const authRoute = require("./Routes/authRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", authRoute); // route to login, register



//connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connection is Successful");
}).catch((error)=>{
    console.log(error)
});


app.listen(6000, () => {console.log("Server is running");});