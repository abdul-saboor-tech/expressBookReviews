const express = require("express");
const general = require("./router/general");
const users = require("./router/auth_users");
const customer = require("./router/customer");

const app = express();

app.use(express.json());

app.use("/", general);
app.use("/", users);
app.use("/", customer);

app.get("/", (req, res) => {
  res.json({
    message: "Express Book Review API is running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});