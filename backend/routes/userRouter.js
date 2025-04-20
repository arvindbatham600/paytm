const express = require("express");
const SignupValidation = require("../middlewares/SigninValidation");
const SignupHander = require("../controllers/SignupHandler");
const SigninValidation = require("../middlewares/SigninValidation");
const SigninHandler = require("../controllers/SigninHandler");
const AuthMiddleware = require("../auth/AuthMiddleware");
const UpdatePassword = require("../middlewares/UpdatePassword");
const BulkUserController = require("../controllers/BulkUserController");
const router = express.Router();

// signup and signin router
router.post("/signup", SignupValidation, SignupHander);
router.post("/signin", SigninValidation, SigninHandler);
router.put("/", AuthMiddleware, UpdatePassword);
router.get("/bulk", AuthMiddleware, BulkUserController);

module.exports = router;
