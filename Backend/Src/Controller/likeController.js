const postModel = require("../Model/postModel");
const likeModel = require("../Model/likeModel");


const likeFun = async (req, res)=>{
const user = req.user.id;
const {id} = req.params ;
    
try{
   const findPost = await postModel.findById(id)
    if(!findPost){
    return res.status(404).json({
        "message" : "no post found"
    })
}


const findAlreadyLike = await likeModel.findOne({
    user : user,
    post : id
})

if(findAlreadyLike){
    return res.status(400).json({
        "message" : "already like",

    })
}

const likes = await likeModel.create({
    user : user,
    post : findPost._id
});

return res.status(200).json({
    "message" : "Like post",
    likes
})
}
catch(err){
    return res.status(404).json({
        "message" : err.message
    })
}}



const dislikeFun=  async(req,res)=>{
    const user = req.user.id;
    const {id} = req.params;
try{

    const isUserExit =  await likeModel.findOneAndDelete({
        user : user ,
        post : id
    })
    
    return res.status(200).json({
        "message" : "dislike post"
    })
    
}catch(err){
    return res.status(404).json({
        err : err.message
    })
}

}

module.exports ={likeFun , dislikeFun}