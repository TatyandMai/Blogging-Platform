const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config({ debug: true });


dotenv.config();

const app = express();
app.use(cors());


const authRoute = require("./Routes/authRoutes");
const postRoute = require("./Routes/postRoutes"); // Import the post routes
const userRoute = require("./Routes/userRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", authRoute); // Route for authentication (login, register)
app.use("/api/posts", postRoute); // Route for post operations
app.use("/api/users", userRoute); // Route for user operations


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

app.listen(4000, () => {
  console.log("Server is running");
});
