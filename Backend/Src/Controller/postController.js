const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const postModel = require("../Model/postModel");
const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_URL,
});


const postFunction =async (req, res) => {
    try {
      const { caption } = req.body;
      const user = req.user;

      if (!req.file) {
        return res.status(400).json({
          message: "Image must be required",
        });
      }

      const result = await imageKit.files.upload({
        file: await toFile(req.file.buffer, req.file.originalname),

        fileName: req.file.originalname,

        folder: "Instagram_Project_folder",
      });

      const post = await postModel.create({
        caption,
        likes: user._id,
        user: user._id,
        image: result.url,
      });

      return res.status(201).json({
        message: "Post created successfully",
        post,
      });
    } catch (err) {
      return res.status(404).json({
        message: err.message,
      });
    }
  }


const getAllPost = async(req,res)=>{
try{
  const data = await postModel.find().populate({
    path :"user",
    select : "UserName",

    populate:{
      path :"profile",
      select :"profileImage"
    }
  }).sort({createdAt : -1});
  return res.status(200).json({
    "message" : "all post fetch successfully ",
    data
  })
} 
catch(err){
  return res.status(404).json({
    "message" : "something went wrong",
  err:  err.response
  })
}
} 
module.exports = {postFunction , getAllPost};  