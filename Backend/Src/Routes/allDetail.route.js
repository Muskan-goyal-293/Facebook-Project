const express = require("express");
const userModel = require("../Model/authModel");
const verifyUser = require("../Middleware/userVerify.middleware");

const allDetailRout = express.Router();

module.exports = allDetailRout;

allDetailRout.get("/detail", verifyUser, async (req, res) => {

   try{

      const userId = req.user.id;

      const isUserExit = await userModel
      .findById(userId)
      .populate("profile");

      if(!isUserExit){
         return res.status(404).json({
            message : "user not found"
         });
      }

      return res.status(200).json({
         success : true,
         data : isUserExit
      });

   }
   catch(err){

      return res.status(500).json({
         message : err.message
      });

   }

});