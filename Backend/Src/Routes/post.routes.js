// import module
const express = require("express");
const postRoute = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const verifyUser = require("../Middleware/userVerify.middleware");
const {postFunction , getAllPost} = require("../Controller/postController")

// export module
module.exports = postRoute;


// route
// api => http://localhost:3000/api/create-post
postRoute.post(  "/create-post",upload.single("image"),verifyUser,postFunction);

// api => http://localhost:3000/api/get-all-post
postRoute.get("/get-all-post" ,getAllPost)


