const express = require("express");
const userRouter = require("./userRouter");
const transactionRouter = require("./transactionRouter");
const router = express.Router();

// checking is this working or not...
// router.get("/", (req, res) => {
//   console.log("main router");
//   return res.send("min router");
// });

router.use("/user", userRouter); // all user routes will be here..
router.use("/account", transactionRouter); // will be usign authMiddleware here

module.exports = router;
