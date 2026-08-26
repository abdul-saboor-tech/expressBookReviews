const axios = require("axios");

// Promise-based helper for retrieving remote JSON data.
function getBooksWithPromise(url) {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

// Async/await version.
async function getBooksWithAsyncAwait(url) {
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  getBooksWithPromise,
  getBooksWithAsyncAwait
};