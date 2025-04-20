const mongoose = require("mongoose");

// create account schema

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // reference to user model
    ref: "User",
    require: true,
  },
  balance: {
    type: Number,
    require: true,
  },
});

// create model
const AccountModel = mongoose.model("Account", accountSchema);

// export the model
module.exports = AccountModel;
