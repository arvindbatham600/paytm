const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");

const SigninHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if the user exists or not..
    // user await here, its Asynchronous request
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      // get the password
      const userPassword = userExist.password;
    //   console.log("userpassword from database", userPassword);
      // compare this password with Entered password
      const passwordMatch = await bcrypt.compare(password, userPassword);
      //   console.log("password check", passwordMatch);
      if (passwordMatch) {
        const token = jwt.sign(
          {
            id: userExist._id,
            email,
          },
          process.env.JWT_SECRET
        );

        res.status(200).send({
          token,
        });
      }
    } else {
      res.status(200).send({
        message: "email not registered",
      });
    }
  } catch (e) {
    res.status(500).send({
      message: "internal Server Error",
    });
  }
};

module.exports = SigninHandler;
