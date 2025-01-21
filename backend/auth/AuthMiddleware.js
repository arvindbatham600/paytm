const jwt = require("jsonwebtoken");

const AuthMiddleware = async (req, res, next) => {
  //get the token from headers -->
  const authorization = req.headers["authorization"];
  // console.log("token", authorization.split(" ")[1]);
  const token = authorization.split(" ")[1];
  //   console.log("decoded value", decode.email);
  try {
    // jwt decode
      const decode = jwt.verify(token, process.env.JWT_SECRET);
    //   console.log("decoded value", decode)
      req.userId = decode.id;
      
      next(); // you can go ahead
  } catch (e) {
      res.status(500).send({
          message: "Invalid Token",
          success: false
      })
    console.log("error", e);
  }
};

module.exports = AuthMiddleware;
