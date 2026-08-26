const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Get all books using Promise callbacks
function getAllBooks(url = BASE_URL) {
  if (!url) {
    return Promise.reject(new Error("API URL is required"));
  }

  return axios
    .get(`${url}/books`)
    .then((response) => {
      if (!response || !response.data) {
        throw new Error("No book data was returned");
      }

      return response.data;
    })
    .catch((error) => {
      console.error(
        "Error retrieving all books:",
        error.response?.data?.message || error.message
      );
      throw error;
    });
}

// Get book by ISBN using async/await
async function getBooksByISBN(url = BASE_URL, isbn) {
  if (!url) {
    throw new Error("API URL is required");
  }

  if (!isbn) {
    throw new Error("ISBN is required");
  }

  try {
    const response = await axios.get(
      `${url}/books/isbn/${encodeURIComponent(isbn)}`
    );

    if (!response || !response.data) {
      throw new Error("No book was found for the specified ISBN");
    }

    return response.data;
  } catch (error) {
    console.error(
      "Error retrieving book by ISBN:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
}

// Get books by author using Promise callbacks
function getBooksByAuthor(url = BASE_URL, author) {
  if (!url) {
    return Promise.reject(new Error("API URL is required"));
  }

  if (!author) {
    return Promise.reject(new Error("Author is required"));
  }

  return axios
    .get(`${url}/books/author/${encodeURIComponent(author)}`)
    .then((response) => {
      if (!response || !response.data) {
        throw new Error("No books were found for the specified author");
      }

      return response.data;
    })
    .catch((error) => {
      console.error(
        "Error retrieving books by author:",
        error.response?.data?.message || error.message
      );
      throw error;
    });
}

// Get books by title using async/await
async function getBooksByTitle(url = BASE_URL, title) {
  if (!url) {
    throw new Error("API URL is required");
  }

  if (!title) {
    throw new Error("Title is required");
  }

  try {
    const response = await axios.get(
      `${url}/books/title/${encodeURIComponent(title)}`
    );

    if (!response || !response.data) {
      throw new Error("No books were found for the specified title");
    }

    return response.data;
  } catch (error) {
    console.error(
      "Error retrieving books by title:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
}

module.exports = {
  getAllBooks,
  getBooksByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};