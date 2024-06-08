const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const ideaRoutes = require("./routes/idea");
const cors = require("cors");

const app = express();
connectDB();

// Use the CORS middleware
const corsOptions = {
  origin: "https://vichardhaara.netlify.app/",
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

// Protected routes
app.use("/api", userRoutes);
app.use("/api", ideaRoutes);
app.use("/api", ideaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
