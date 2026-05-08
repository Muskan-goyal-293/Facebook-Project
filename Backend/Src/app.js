// require Module
const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const authRout = require("./Routes/auth.routes");
const profileRout = require("./Routes/profile.routes");
const allUser = require("./Routes/allUserGet.routes");
// Middleware
app.use(express.json());
app.use(cookieParser());
app.use("/api" , authRout);
app.use("/api" , profileRout);
app.use("/api" , allUser)




// Export module
module.exports ={app , port};