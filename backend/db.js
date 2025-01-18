const mongoose = require("mongoose");

// connect mongodb url
mongoose.connect(
  "mongodb+srv://arvindbatham60:mongopassword@cluster0.qph9o.mongodb.net/"
);

// create schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
});

// create model
const User = mongoose.model("User", userSchema);

// export the model
module.exports = {
  User,
};
