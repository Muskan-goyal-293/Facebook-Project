const express = require("express");
const allUser = express.Router();
const userModel = require("../Model/authModel");
const userProfileModel = require("../Model/profileModel");
module.exports = allUser

allUser.get("/get-user" ,async(req,res)=>{
const allUserData = await userProfileModel.find().populate("user");
return res.status(200).json({
    "message" :"All User Fetch",
    allUserData
})
})