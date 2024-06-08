const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const JWT_SECRET = "your_jwt_secret_key"; // Make sure this matches in both files

const register = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const userExists = await User.findOne({ username });
    console.log(userExists);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error); // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    // const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const userId = user.userId;
    const email = user.email;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET, {
      expiresIn: "1h",
    });
    // res.json({ token });
    res.status(200).send({
      userId: userId,
      username: username,
      email: email,
      accessToken: token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
};
