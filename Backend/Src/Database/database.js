const mongoose = require("mongoose");

function connectToDb(){
     mongoose.connect(process.env.MONGOOS_URL)
     .then((res)=>{
        console.log("connect to database")
     })
     .catch((err)=>{
        console.log("not connected" , err)
     })
}

module.exports  = connectToDb