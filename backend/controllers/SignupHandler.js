
// import the user model
const UserModel = require("../Models/UserModel");

const SignupHander = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExist = await UserModel.findOne({ email });
};

module.exports = SignupHander;
