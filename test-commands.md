# cURL commands for the assignment

Start the server with `npm start`.

## Q1 - githubrepo
```bash
git remote -v
```

## Q2 - getallbooks
```bash
curl http://localhost:5000/books
```

## Q3 - getbooksbyISBN
```bash
curl http://localhost:5000/books/isbn/9780140328721
```

## Q4 - getbooksbyauthor
```bash
curl "http://localhost:5000/books/author/Roald%20Dahl"
```

## Q5 - getbooksbytitle
```bash
curl "http://localhost:5000/books/title/Matilda"
```

## Q6 - getbookreview
```bash
curl http://localhost:5000/books/9780140328721/reviews
```

## Q7 - register
```bash
curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d "{\"username\":\"student1\",\"password\":\"password123\"}"
```

## Q8 - login
```bash
curl -X POST http://localhost:5000/login -H "Content-Type: application/json" -d "{\"username\":\"student1\",\"password\":\"password123\"}"
```

## Q9 - reviewadded
Use the token returned by login:
```bash
curl -X PUT http://localhost:5000/books/9780140328721/review -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_TOKEN" -d "{\"review\":\"Excellent book!\"}"
```

## Q10 - deletereview
```bash
curl -X DELETE http://localhost:5000/books/9780140328721/review -H "Authorization: Bearer YOUR_TOKEN"
```
