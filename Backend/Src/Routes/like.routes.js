//  import require module
const express = require("express");
const likeRoute = express.Router();
const verifyUser = require("../Middleware/userVerify.middleware");
const {likeFun , dislikeFun} = require("../Controller/likeController")
//  export module
module.exports = likeRoute;

// route
likeRoute.post("/like-post/:id",  verifyUser, likeFun)


//  dislike post

likeRoute.delete("/dislike-post/:id" , verifyUser , dislikeFun)