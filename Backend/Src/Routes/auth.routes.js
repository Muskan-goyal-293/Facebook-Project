//  require Module
const express = require("express");
const authRout = express.Router();
const { registerFunc, loginFunc } = require("../Controller/authController");

// export module
module.exports = authRout;

// register api
// api => http://localhost:3000/api/register
authRout.post("/register", registerFunc);

// login api
// api => http://localhost:3000/api/login
authRout.post("/login", loginFunc);
