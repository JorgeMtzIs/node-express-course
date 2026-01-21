const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name } = decoded;
    req.user = { name };
  } catch (error) {
    res.status(401).json({ message: "unauthorized" });
  }
  next();
};

module.exports = authMiddleware;
