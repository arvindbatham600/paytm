const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");

const SigninHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if the user exists or not..
    // user await here, its Asynchronous request
    const userExist = await UserModel.findOne({ email });
    if (!userExist) {
      return res.status(404).send({
        message: "Email not registered",
      });
    }
    // get the password
    const userPassword = userExist.password;

    // compare this password with Entered password
    const passwordMatch = await bcrypt.compare(password, userPassword);
    if (!passwordMatch) {
      return res.send({
        message: "Invalid credential",
      });
    }

    const token = jwt.sign(
      {
        id: userExist._id,
        email,
      },
      process.env.JWT_SECRET
    );

    return res.status(200).send({
      message: "User Authenticated",
      token,
    });
  } catch (e) {
    return res.status(500).send({
      message: "internal Server Error",
    });
  }
};

module.exports = SigninHandler;
