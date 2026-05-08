const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  bio: {
    type: String,
    default: "",
  },
  isPrivate: {
    default: false,
    type: Boolean,
  },
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/1ris6t5in/3D%20Simple%20User%20Icon%20Isolated_%20Render%20Profile%20Photo%20Symbol%20UI.%20Avatar%20Sign.%20Person%20or%20People%20GUI%20Element.%20Realistic%20Vector%20Illustration",
  },
  gender: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const userProfileModel = mongoose.model("profile", profileSchema);

module.exports = userProfileModel;
