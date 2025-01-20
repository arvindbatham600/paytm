// import the user model
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");

const SignupHander = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExist = await UserModel.findOne({ email });
  console.log("userExist", userExist)
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
      password : hashedPassword,
    });
    console.log("user detail", user)
  }
};

module.exports = SignupHander;
