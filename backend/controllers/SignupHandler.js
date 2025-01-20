// import the user model
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SignupHander = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    res.status(200).send({
      message: "User already Exists",
    });
  } else {
    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create a new user in the database
    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    user.save();
    const token = jwt.sign({ email, firstName }, process.env.JWT_SECRET);
    res.status(200).send({
      message: "User Created Successfully",
      token: token,
    });
  }
};

module.exports = SignupHander;
