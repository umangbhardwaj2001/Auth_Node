// routes/authRoutes.js
const express = require("express");
const { register, login } = require("../controllers/authController");
const authenticateJWT = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/protected", authenticateJWT, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
