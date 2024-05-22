const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
    author: {type: String, default: "Anonymous"},
    rant: {type: Boolean, required: false},
    stars: {type: Number, required: true},
    content: {type: String, default: ""}
})

module.exports = mongoose.model("Comment", commentSchema)