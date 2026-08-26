# Express Book Reviews

A Node.js and Express REST API for managing books, users, authentication, and book reviews.

## Setup

```bash
npm install
npm start
```

Server: `http://localhost:5000`

## Endpoints

- `GET /books`
- `GET /books/isbn/:isbn`
- `GET /books/author/:author`
- `GET /books/title/:title`
- `GET /books/:isbn/reviews`
- `POST /register`
- `POST /login`
- `PUT /books/:isbn/review`
- `DELETE /books/:isbn/review`

Use a Bearer JWT token for protected review operations.
