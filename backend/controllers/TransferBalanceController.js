const { default: mongoose } = require("mongoose");
const AccountModel = require("../Models/AccountModel");

const transferBalanceController = async (req, res) => {
  try {
    // start the session
    const session = await mongoose.startSession();
    session.startTransaction();
    const userId = req.userId;
    const { amount, to } = req.body;

    // fetch the accounts within the transaction
    const account = await AccountModel.findOne({ userId }).session(session);
    // check if sending amount is more then actual
    if (!account || account.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    const toAccount = await AccountModel.findOne({ userId: to }).session(
      session
    );
    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Invalid Account",
      });
    }

    // perform the transaction
    await AccountModel.updateOne(
      { userId },
      { $inc: { balance: -amount } }
    ).session(session);
    await AccountModel.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    //   Commit the transaction
    await session.commitTransaction();
    res.status(200).json({
      message: "Transfer Successful",
    });
  } catch (e) {
    session.endSession();
    return res.status(500).send({
      message: "Transaction Failed",
    });
  }
};

module.exports = transferBalanceController;
