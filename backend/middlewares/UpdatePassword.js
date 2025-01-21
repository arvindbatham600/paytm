const UserModel = require("../Models/UserModel");

const UpdatePassword = async (req, res) => {
  try {
    const { password, firstName, lastName } = req.body;

      const userId = req.userId;
      console.log("userId", userId)
    // get the information about the user
    const userInfo = await UserModel.findById(userId);
    console.log("userInfo", userInfo);
    try {
      await UserModel.findByIdAndUpdate(userId, {
        $set: {
          firstName,
          lastName,
          password,
        },
      });
      res.status(200).send({
        message: "Information changed SuccessFully",
      });
    } catch (e) {
      res.status(500).send({
        message: "Error while updating Information",
      });
    }
  } catch (e) {
    res.status(404).send({
      message: "Error",
    });
  }
};

module.exports = UpdatePassword;
