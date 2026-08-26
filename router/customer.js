const express = require("express");
const jwt = require("jsonwebtoken");
const books = require("../data/books");

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "express-book-review-secret";

function authenticate(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) return res.status(401).json({ message: "Authentication required" });

  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

router.put("/books/:isbn/review", authenticate, (req, res) => {
  const book = books[req.params.isbn];
  if (!book) return res.status(404).json({ message: "Book not found" });

  const { review } = req.body;
  if (!review) return res.status(400).json({ message: "Review is required" });

  book.reviews[req.user.username] = review;
  res.json({
    message: "Review added or modified successfully",
    reviews: book.reviews
  });
});

router.delete("/books/:isbn/review", authenticate, (req, res) => {
  const book = books[req.params.isbn];
  if (!book) return res.status(404).json({ message: "Book not found" });

  if (!book.reviews[req.user.username]) {
    return res.status(404).json({ message: "Review not found" });
  }

  delete book.reviews[req.user.username];
  res.json({ message: "Review deleted successfully", reviews: book.reviews });
});

module.exports = router;