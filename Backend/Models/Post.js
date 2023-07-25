const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    title: {
        type: String,
        max: 100
    },
    description: {
        type: String,
        max: 200
    },
},
    {timeStamps: true}
);

module.exports = mongoose.model("Post", PostSchema);