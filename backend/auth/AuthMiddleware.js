const jwt = require("jsonwebtoken");

const AuthMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // check if authHeader exists and starts with Bearer
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({
      message: "Token Not Provided",
    });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.id) {
      req.userId = decoded.id;
      next();
    } else {
      return res.status(403).json({
        message: "Not Authorized",
      });
    }
  } catch (e) {
    return res.status(403).json({
      message: "Wrong Token",
    });
  }
};

module.exports = AuthMiddleware;
