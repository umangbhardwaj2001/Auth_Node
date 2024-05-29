const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_jwt_secret_key"; // Make sure this matches in both files

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(403).send({ message: "No token provided" });
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(403).send({ message: "Token format is invalid" });
  }

  const token = parts[1];
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(500).send({ message: "Failed to authenticate token" });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
