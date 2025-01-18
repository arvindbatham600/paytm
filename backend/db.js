const mongoose = require("mongoose");

// connect mongodb url
mongoose.connect("string to connect the server");

// create schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String,
});

// create model
const users = mongoose.model(userSchema);

// export the model
module.exports = {
  users,
};
