const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref :"user",
        req : true
    },
    post :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "post",
        req:true
    }
})

const likeModel = mongoose.model("like", likeSchema);

module.exports = likeModel