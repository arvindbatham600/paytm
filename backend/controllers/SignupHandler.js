const User = require("../db");

const SignupHander = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  res.send("signup handler working");
};

module.exports = SignupHander;


