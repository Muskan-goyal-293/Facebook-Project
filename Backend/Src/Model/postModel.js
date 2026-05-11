const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      require: [true, "Without any image post does not create"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

  },
  { timestamps: true },
);

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
