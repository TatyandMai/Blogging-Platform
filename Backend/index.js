const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

require('dotenv').config({ debug: true });


dotenv.config();

const app = express();

require("dotenv").config();

const authRoute = require("./Routes/authRoutes");
const postRoute = require("./Routes/postRoutes"); // Import the post routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", authRoute); // Route for authentication (login, register)
app.use("/api/posts", postRoute); // Route for post operations

console.log("MONGO_URL:", process.env.MONGO_URL);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(6000, () => {
  console.log("Server is running");
});
