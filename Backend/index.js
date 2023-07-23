const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000

const app = express();

require("dotenv").config();


//connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
});


app.listen(port, () => {console.log("Server is running");});