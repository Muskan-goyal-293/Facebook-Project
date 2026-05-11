// import module
const bcrypt = require("bcrypt");
const jsonWebToken = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userModel = require("../Model/authModel");
const profileModel = require("../Model/profileModel")
// function

const registerFunc = async (req, res) => {
  // take user data
  const { UserName, email, password, confirmPassword, age } = req.body;

  const findUser = await userModel.findOne({
    $or: [{ UserName }, { email }],
  });

  //  verify user already exit  if exit then return
  if (findUser) {
    return res.status(409).json({
      message: "user already exit",
    });
  }

  //   check password match or not
  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Password and Confirm Password do not match",
    });
  }

  //   check age is small then 18
  if (age < 18) {
    return res.status(403).json({
      message: "You must be at least 18 years old to register",
    });
  }
  try {
    //   password hash
    const hashPassword = await bcrypt.hash(password, 10);
    
    //  user create on database
    const user = await userModel.create({
      UserName,
      email,
      password: hashPassword,
      age,
    });

    const profile = await profileModel.create({   user:user._id,
})
    
    user.profile  =profile._id ;

    await user.save()
    
    
    //   token create with jwt signature
    const token = jsonWebToken.sign(
      { id: user._id },
      process.env.JSONWEB_TOKEN_KEY,
      { expiresIn: "48h" },
    );

    //   set in  cookie
    res.cookie("token", token);

    //   response send
    return res.status(201).json({
      message: `${UserName} Register Successfully`,
      user
    });

  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
};
//  login function
const loginFunc = async (req, res) => {
  // fetch data

  const { UserName, email, password } = req.body;
  //  check userName or Email exit or not

  const findUserNameOrEmail = await userModel.findOne({
    $or: [{ email }, { UserName }],
  }).select("+password");

  //   if Not then return
  if (!findUserNameOrEmail) {
    return res.status(404).json({
      message: "User Not Exit",
    });
  }

  //   match password

  const hashPasswordCheck = await bcrypt.compare(
    password,
    findUserNameOrEmail.password,
  );

  //  if password not match  then return

  if (!hashPasswordCheck) {
    return res.status(401).json({
      message: "Password Not Match",
    });
  }

  //  if every thing is okay
  // then create token

  const token = jsonWebToken.sign(
    {
      id: findUserNameOrEmail.id,
    },
    process.env.JSONWEB_TOKEN_KEY,
    {
      expiresIn: "48h",
    },
  );

  //   set in cookie

  res.cookie("token", token);

  //   send response

  return res.status(200).json({
    message: "Successfully Login",
  });
};

// export module
module.exports = { registerFunc, loginFunc };
