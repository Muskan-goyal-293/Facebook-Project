 const followerModel = require("../Model/followModel");
 const  verifyUser  = require("../Middleware/userVerify.middleware");
 const express = require("express");
const userModel = require("../Model/authModel");
 const followRout = express.Router();

 module.exports = followRout;

 followRout.post("/follow/:id" , verifyUser , async(req,res)=>{
 const {id} = req.params;
 const user = req.user.id;

 if(id === user){
    return res.status(400).json({
        "message" : "you can not follow your self"
    })
 }

 try{
 const userExit =await  userModel.findById(id).populate("profile");
 if(!userExit){
    return res.status(404).json({
        "message" : "user not found"
    })
 }


const isFollowerExit = await followerModel.findById(id)
if(isFollowerExit){
 return res.status (404).json({
   "message" : "already follow", 
 })
}


 if(userExit.profile.isPrivate ===  false){

    const followUser = followerModel.create({
      sender : user,
      receiver : id
    })

    return res.status(200).json({
        "message" : "following"

    })

   }


 if(userExit.profile.isPrivate === true){
    return res.status(200).json({
        "message" : "request"
    })
 }


 }catch(err){
 return res.status(404).json({
    "message" : err.message
 })
 }
 })

