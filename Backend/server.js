// require module
require("dotenv").config()
const connectToDb = require("./Src/Database/database")
const {app,port} = require("./Src/app");

// server start
connectToDb();
app.listen(port,()=>{
    console.log("app is running")
})