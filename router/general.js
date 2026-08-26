const express = require("express");
const axios = require("axios");
const books = require("../data/books");

const router = express.Router();

// Get all books
router.get("/books", (req, res) => {
  res.json(Object.values(books));
});

// Get book by ISBN
router.get("/books/isbn/:isbn", (req, res) => {
  const book = books[req.params.isbn];
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// Get books by author
router.get("/books/author/:author", (req, res) => {
  const author = req.params.author.toLowerCase();
  const result = Object.values(books).filter(
    book => book.author.toLowerCase() === author
  );
  if (!result.length) return res.status(404).json({ message: "No books found" });
  res.json(result);
});

// Get books by title
router.get("/books/title/:title", (req, res) => {
  const title = req.params.title.toLowerCase();
  const result = Object.values(books).filter(
    book => book.title.toLowerCase() === title
  );
  if (!result.length) return res.status(404).json({ message: "No books found" });
  res.json(result);
});

// Get reviews for a book
router.get("/books/:isbn/reviews", (req, res) => {
  const book = books[req.params.isbn];
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book.reviews || {});
});

// Example Axios + async/await helper
async function getRemoteData(url) {
  const response = await axios.get(url);
  return response.data;
}

module.exports = router;
module.exports.getRemoteData = getRemoteData;