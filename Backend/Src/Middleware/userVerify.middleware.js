const jsonWebToken = require("jsonwebtoken");
const userModel = require("../Model/authModel")

async function verifyUser(req,res ,next){
 const Token = req.cookies.token
{
 let decodeToken =""; 
 try{
 decodeToken = jsonWebToken.verify(Token , process.env.JSONWEB_TOKEN_KEY);
 if(!decodeToken){
    return res.status(401).json({
        "message" :" Unauthorized"
    })
 }
 }
 catch(err){
    console.log(err)
 }

 const id = decodeToken.id;
 const user = await userModel.findById(id).select("-password");
 
 if(!user){
    return  res.status(404).json({
        "message" :"User Not Found"
    })
 }

 req.user = user;
 
 next()
}
}

module.exports = verifyUser