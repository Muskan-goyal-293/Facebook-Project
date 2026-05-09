//  require module
const userProfileModel = require("../Model/profileModel");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_URL,
});

// function to create and update profile

const creteProfileFun = async (req, res) => {
  try {

    // middleware check token is valid or not
    const userInfo = req.user;

    // fetch data from body
    const { bio, isPrivate, gender } = req.body;

    // check user send anything or not
    if (
      !bio &&
      !gender &&
      isPrivate === undefined &&
      !req.file
    ) {
      return res.status(400).json({
        message: "Nothing to create",
      });
    }

    // image upload
    let result = null;

    if (req.file) {
      result = await imageKit.files.upload({
        file: await toFile(
          req.file.buffer,
          req.file.originalname
        ),

        fileName: req.file.originalname,

        folder: "Instagram_Project_folder",
      });
    }

    // check user already exist or not
    const isUserExit = await userProfileModel.findOne({
      user: userInfo._id,
    });

    // update profile
    if (isUserExit) {

      const update = {};

      if (bio) {
        update.bio = bio;
      }

      if (gender) {
        update.gender = gender;
      }

      if (isPrivate !== undefined) {
        update.isPrivate = isPrivate;
      }

      if (result?.url) {
        update.profileImage = result.url;
      }

      await userProfileModel.findOneAndUpdate(
        { user: userInfo._id },
        update,
        { new: true }
      );

      return res.status(200).json({
        message: "Successfully Update Your Profile",
      });
    }

    // create profile
    else {

      const userProfile = await userProfileModel.create({
        bio,
        isPrivate,
        gender,
        profileImage: result?.url,
        user: userInfo._id,
      });

      return res.status(201).json({
        message: "Successfully Create Your Profile",
        userProfile,
      });
    }

  } catch (err) {

    // if any error occur
    return res.status(400).json({
      message: err.message,
    });
  }
};

// export function
module.exports = creteProfileFun;