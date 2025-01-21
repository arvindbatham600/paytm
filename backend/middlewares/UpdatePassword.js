const UserModel = require("../Models/UserModel");
const zod = require("zod");
const bcrypt = require("bcrypt");

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

const UpdatePassword = async (req, res) => {
  try {
    const { password, firstName, lastName } = req.body;
    const { success } = updateBody.safeParse(req.body);

    if (!success) {
      return res.status(411).json({
        message: "Error while updating the information",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("hashed password", hashedPassword);
    // console.log("userId", req.userId);

    await UserModel.updateOne(
      { _id: req.userId },
      {
        firstName,
        lastName,
        password: hashedPassword,
      }
    );
    return res.json({
      message: "Updated SuccessFully",
    });

    // one more way to do the same thing
    // const userId = req.userId;
    // console.log("userId", userId);
    // // get the information about the user
    // const userInfo = await UserModel.findById(userId);
    // console.log("userInfo", userInfo);
    // try {
    //   await UserModel.findByIdAndUpdate(userId, {
    //     $set: {
    //       firstName,
    //       lastName,
    //       password,
    //     },
    //   });
    //   res.status(200).send({
    //     message: "Information changed SuccessFully",
    //   });
    // } catch (e) {
    //   res.status(500).send({
    //     message: "Error while updating Information",
    //   });
    // }
  } catch (e) {
    return res.status(404).send({
      message: "Error",
    });
  }
};

module.exports = UpdatePassword;
