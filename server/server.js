// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const ideaRoutes = require("./routes/idea");
const cors = require("cors");

const app = express();

// Use the CORS middleware
const corsOptions = {
  origin: "http://localhost:1234",
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

const url = process.env.DATABASE_URL;
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.use(express.json());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

// Protected routes
app.use("/api", userRoutes);
app.use("/api/idea", ideaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
