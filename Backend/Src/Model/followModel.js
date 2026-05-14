const mongoose = require("mongoose");

const followerSchema = new mongoose.Schema({
 sender :{
    type : mongoose.Schema.Types.ObjectId,
    ref :"user",
    require : true ,
 },
 receiver:{
    type :mongoose.Schema.Types.ObjectId,
    ref: "user",
    require : true
 } 
})

const followerModel =  mongoose.model("follow" , followerSchema);

module.exports = followerModel;