const express = require("express");
const authenticateJWT = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/user", authenticateJWT, (req, res) => {
  res.json({ message: "Welcome to the user page!", user: req.user });
});

// Add more protected routes here
router.get("/dashboard", authenticateJWT, (req, res) => {
  res.json({ message: "Welcome to the dashboard!", user: req.user });
});

router.get("/settings", authenticateJWT, (req, res) => {
  res.json({ message: "Welcome to the settings page!", user: req.user });
});

module.exports = router;
