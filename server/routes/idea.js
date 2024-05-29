const express = require("express");
const router = express.Router();
const IdeaCollection = require("../config/db");
const authenticateJWT = require("../middleware/authMiddleware");

// Route to fetch all ideas
router.get("/", authenticateJWT, async (req, res) => {
  try {
    const ideas = await IdeaCollection.find();
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
