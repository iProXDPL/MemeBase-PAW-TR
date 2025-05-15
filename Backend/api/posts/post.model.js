const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  image: { type: String },
  description: { type: String, required: true },
  likes: { type: [String], default: [] },
  dislikes: { type: [String], default: [] },
});

module.exports = mongoose.model("Post", postSchema);
