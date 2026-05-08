// import module
const express = require("express");
const profileRout = express.Router();
const verifyUser = require("../Middleware/userVerify.middleware");
const creteProfileFun = require("../Controller/profileController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

//  export module
module.exports = profileRout;

// api => http://localhost:3000/api/crete-profile
profileRout.post(
  "/create-profile",
  verifyUser,
  upload.single("profileImage"),
  creteProfileFun,
);
