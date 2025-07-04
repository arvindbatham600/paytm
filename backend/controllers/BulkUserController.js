const UserModel = require("../Models/UserModel");

const BulkUserController = async (req, res) => {
  try {
    const filter = req.query.filter || "";
    const users = await UserModel.find({
      $or: [
        {
          firstName: {
            $regex: filter,
          },
        },
        {
          lastName: {
            $regex: filter,
          },
        },
      ],
    });

    res.status(200).send({
      user: users.map((user) => ({
        userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
      })),
    });
  } catch (e) {
    return res.status(500).send({
      message: "Internal server error",
    });
  }
};

module.exports = BulkUserController;
