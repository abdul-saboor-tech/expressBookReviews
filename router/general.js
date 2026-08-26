const express = require("express");
const books = require("../data/books");

const router = express.Router();

// Get all books
router.get("/books", (req, res) => {
  res.status(200).json(Object.values(books));
});

// Get book by ISBN
router.get("/books/isbn/:isbn", (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  res.status(200).json(book);
});

// Get books by author
router.get("/books/author/:author", (req, res) => {
  const author = decodeURIComponent(req.params.author).toLowerCase();

  const result = Object.values(books).filter(
    (book) => book.author.toLowerCase() === author
  );

  if (result.length === 0) {
    return res.status(404).json({
      message: "No books found",
    });
  }

  res.status(200).json(result);
});

// Get books by title
router.get("/books/title/:title", (req, res) => {
  const title = decodeURIComponent(req.params.title).toLowerCase();

  const result = Object.values(books).filter(
    (book) => book.title.toLowerCase() === title
  );

  if (result.length === 0) {
    return res.status(404).json({
      message: "No books found",
    });
  }

  res.status(200).json(result);
});

// Get reviews for a book
router.get("/books/:isbn/review", (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  res.status(200).json(book.reviews || {});
});

module.exports = router;