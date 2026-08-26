const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const users = {};

const SECRET = process.env.JWT_SECRET || "express-book-review-secret";

// Register
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required"
    });
  }

  if (users[username]) {
    return res.status(409).json({
      message: "User already exists"
    });
  }

  users[username] = {
    username,
    password
  };

  return res.status(201).json({
    message: "User registered successfully",
    username
  });
});

// Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!users[username] || users[username].password !== password) {
    return res.status(401).json({
      message: "Invalid username or password"
    });
  }

  const token = jwt.sign(
    { username },
    SECRET,
    { expiresIn: "1h" }
  );

  return res.status(200).json({
    message: "Login successful",
    token
  });
});

module.exports = router;
module.exports.users = users;
module.exports.SECRET = SECRET;