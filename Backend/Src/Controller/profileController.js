//  require module
const userProfileModel = require("../Model/profileModel");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_URL,
});

// function to crete and update profile

const creteProfileFun = async (req, res) => {
  try {
    // middleware check token is valid or on
    const userInfo = req.user;

    // fetch data from body
    const { bio, isPrivate, gender } = req.body;

    // fetch image from file
    const result = await imageKit.files.upload({
      file: await toFile(req.file.buffer, req.file.originalname),
      fileName: req.file.originalname,
      folder: "Instagram_Project_folder",
    });

    //  check user already exit or not
    const isUserExit = await userProfileModel.findOne({ user: userInfo._id });

    //  if yes then update profile
    if (isUserExit) {
      const update = {};
      if (bio) {
        update.bio = bio;
      }
      update.isPrivate = isPrivate;
      if (gender) {
        update.gender = gender;
      }
      if (req.file) {
        update.profileImage = result.url;
      }

      const updateProfile = await userProfileModel.findOneAndUpdate(
        { user: userInfo._id },
        update,
      );

      return res.status(201).json({
        message: "Successfully Update Your Profile ",
        updateProfile,
      });
    }

    //   crete profile
    else {
      const userProfile = await userProfileModel.create({
        bio,
        isPrivate,
        gender,
        profileImage: result.url,
        user: userInfo._id,
      });

      return res.status(201).json({
        message: "Successfully  Create Your Profile",
        userProfile,
      });
    }
  } catch (err) {
    //    if any error occur

    return res.status(400).json({
      message: err,
    });
  }
};

//  export function
module.exports = creteProfileFun;
