const express = require("express");
const allUser = express.Router();
const userModel = require("../Model/authModel");
const userProfileModel = require("../Model/profileModel");
module.exports = allUser

allUser.get("/get-user" ,async(req,res)=>{

try{

    const allUserData = await userModel.find().populate("profile");
    return res.status(200).json({
        "message" :"All User Fetch",
        allUserData
    })
}
catch(err){
    return res.status(404).json({
        "message" :" err.message"
    })
}
})