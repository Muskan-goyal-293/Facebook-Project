const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
UserName :{
    type : String ,
    required : [true ,"This Field Must Be Require"],
    unique : true,
    maxLength: 30 ,
    minLength : 2
},
email :{
    type : String,
    unique:true ,
    required : [true ,"This Field Must Be Require "]
},
password :{
    type : String ,
    required : true ,
    minlength :8,
    select : false,
},
age:{
    type :Number,
    required : [true ,"This Field Must Be Require"],  
},    profile:{
      type : mongoose.Schema.Types.ObjectId,
      ref : "profile"
    }
},{
    timestamps:true
})

const userModel = mongoose.model("user" , userSchema)
module.exports = userModel;