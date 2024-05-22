// server.js
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

// Use the CORS middleware
const corsOptions = {
  origin: "http://localhost:1234",
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

// Protected routes
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
