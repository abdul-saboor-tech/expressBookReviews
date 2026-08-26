const axios = require("axios");

// Get all books using Promise
function getAllBooks(url) {
  return axios
    .get(`${url}/books`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error retrieving all books:", error.message);
      throw error;
    });
}

// Get book by ISBN using async/await
async function getBooksByISBN(url, isbn) {
  try {
    const response = await axios.get(
      `${url}/books/isbn/${encodeURIComponent(isbn)}`
    );
    return response.data;
  } catch (error) {
    console.error("Error retrieving book by ISBN:", error.message);
    throw error;
  }
}

// Get books by author using Promise
function getBooksByAuthor(url, author) {
  return axios
    .get(`${url}/books/author/${encodeURIComponent(author)}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error retrieving books by author:", error.message);
      throw error;
    });
}

// Get books by title using async/await
async function getBooksByTitle(url, title) {
  try {
    const response = await axios.get(
      `${url}/books/title/${encodeURIComponent(title)}`
    );
    return response.data;
  } catch (error) {
    console.error("Error retrieving books by title:", error.message);
    throw error;
  }
}

module.exports = {
  getAllBooks,
  getBooksByISBN,
  getBooksByAuthor,
  getBooksByTitle
};