const axios = require("axios");

// Promise-based Axios helper
function getBooksWithPromise(url) {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

// Async/await Axios helper
async function getBooksWithAsyncAwait(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Retrieve all books
function getAllBooks(url) {
  return getBooksWithPromise(`${url}/books`);
}

// Retrieve book by ISBN
function getBooksByISBN(url, isbn) {
  return getBooksWithAsyncAwait(
    `${url}/books/isbn/${encodeURIComponent(isbn)}`
  );
}

// Retrieve books by author
function getBooksByAuthor(url, author) {
  return getBooksWithPromise(
    `${url}/books/author/${encodeURIComponent(author)}`
  );
}

// Retrieve books by title
function getBooksByTitle(url, title) {
  return getBooksWithAsyncAwait(
    `${url}/books/title/${encodeURIComponent(title)}`
  );
}

module.exports = {
  getBooksWithPromise,
  getBooksWithAsyncAwait,
  getAllBooks,
  getBooksByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};