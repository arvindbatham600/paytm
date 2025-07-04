// import the user model
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AccountModel = require("../Models/AccountModel");

const SignupHander = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const userExist = await UserModel.findOne({ email });
    // console.log("userExist in signup page", userExist)
    if (userExist) {
      return res.status(409).send({
        message: "User already Exists",
      });
    } else {
      // hashing the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // create a new user in the database
      // const user = new UserModel({
      //   firstName,
      //   lastName,
      //   email,
      //   password: hashedPassword,
      // });
      const user = await UserModel.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      // console.log("we are here");

      const userId = user._id;

      // create new account
      await AccountModel.create({
        userId,
        balance: 1 + Math.random() * 1000,
      });

      // await user.save();
      // console.log("now we are here")
      const token = jwt.sign({ email, id: userId }, process.env.JWT_SECRET);
      return res.status(200).send({
        message: "User Created Successfully",
        token: token,
        firstName,
        lastName,
        email,
        userId,
      });
    }
  } catch (e) {
    return res.status(500).send({
      message: "getting error while sign up",
    });
  }
};

module.exports = SignupHander;
