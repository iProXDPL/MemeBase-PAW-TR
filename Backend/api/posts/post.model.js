const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: { type: String },
    description: { type: String, required: true },
    likes: { type: [String], default: [] },
    dislikes: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
