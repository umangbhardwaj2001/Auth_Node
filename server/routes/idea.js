const express = require("express");
const router = express.Router();
const IdeaCollection = require("../models/ideasModel");
const { postIdea } = require("../controllers/ideaController");
const authenticateJWT = require("../middleware/authMiddleware");

// Route to fetch all ideas
router.get("/idea", async (req, res) => {
  try {
    const ideas = await IdeaCollection.find();
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/postIdea", authenticateJWT, postIdea);

module.exports = router;
