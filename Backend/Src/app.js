// require Module
const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const cors = require("cors")
const authRout = require("./Routes/auth.routes");
const profileRout = require("./Routes/profile.routes");
const allUser = require("./Routes/allUserGet.routes");
const postRout = require("./Routes/post.routes");
// Middleware
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  })
);
app.use(cookieParser());
app.use("/api" , authRout);
app.use("/api" , profileRout);
app.use("/api" , allUser);
app.use("/api" , postRout );

// Export module
module.exports ={app , port};