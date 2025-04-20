const AccountModel = require("../Models/AccountModel");

const checkBalanaceController = async (req, res) => {
  try {
    // fetch balance of the user
    const userId = req.userId;
    const Account = await AccountModel.findOne({
      userId,
    });
    // return the balance
    return res.status(200).send({
      balance: Account.balance,
      message: "Balance Fetched Successfully",
    });
  } catch (e) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

module.exports = checkBalanaceController;
