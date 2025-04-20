const express = require("express");
const AuthMiddleware = require("../auth/AuthMiddleware");
const checkBalanaceController = require("../controllers/CheckBalanceController");
const transferBalanceController = require("../controllers/TransferBalanceController");

const router = express.Router();

router.get("/balance", AuthMiddleware, checkBalanaceController);
router.post("/transfer", AuthMiddleware, transferBalanceController);

module.exports = router;
