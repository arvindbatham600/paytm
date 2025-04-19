const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const AuthMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // check if authHeader exists and starts with Bearer
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({});
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret);
    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {
      return res.status(403).json({});
    }
  } catch (e) {
    return res.status(403).json({});
  }
};

module.exports = { AuthMiddleware };
