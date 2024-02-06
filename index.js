const express = require("express");

const app = express();

app.get("/greet", greetHandler);

const port = 3000;

function greetHandler(req, res) {
  const name = req.query.name;
  const greeting = name ? `Hello, ${name}!` : `Hello, Guest!`;

  res.send(greeting);
}

app.listen(port, () => console.log(`Server is running on port ${3000}`));
