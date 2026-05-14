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
const likeRout = require("./Routes/like.routes");
const followRout = require("./Routes/follow.routes");
const allDetailRout = require("./Routes/allDetail.route");
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
app.use("/api" , likeRout);
app.use("/api" , followRout);
app.use("/api" , allDetailRout)
// Export module
module.exports ={app , port};