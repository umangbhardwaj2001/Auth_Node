// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { users } = require("../models/userModel");

const JWT_SECRET = "your_jwt_secret_key";

const register = async (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: "User registered successfully" });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
};

module.exports = {
  register,
  login,
};
