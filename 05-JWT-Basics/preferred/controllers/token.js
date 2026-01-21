const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    res.status(400).json({ message: "Must provide name and password" });
  }
  const token = jwt.sign({ name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  res.status(200).json({ token });
};

const hello = async (req, res) => {
  res.status(200).json({ message: `Hello ${req.user.name}` });
};

module.exports = { logon, hello };
