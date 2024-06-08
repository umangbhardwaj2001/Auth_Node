const IdeaCollection = require("../models/ideasModel");

const postIdea = async (req, res) => {
  const {
    ideaName,
    description,
    category,
    ownerName,
    ownerId,
    reusable,
    businessValue,
    comments,
    link,
    pictureFile,
    createdDate,
    ownerEmail,
    ideaId,
  } = req.body;
  try {
    const newIdea = new IdeaCollection({
      ideaName,
      description,
      category,
      ownerName,
      ownerId,
      reusable,
      businessValue,
      comments,
      link,
      pictureFile,
      createdDate,
      ownerEmail,
      ideaId,
    });

    await newIdea.save();
    res.status(201).json({ message: "Idea saved successfully" });
  } catch (error) {
    console.error("Error saving idea:", error);
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Idea with this ID already exists" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { postIdea };
