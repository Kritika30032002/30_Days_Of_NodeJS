const express = require("express");
const app = express();

function positiveIntegerHandler(req, res) {
  const number = parseInt(req.query.number);
  if (isNaN(number) || parseInt(number) <= 0) {
    res.status(400).send("Error: The number is not a positive number.");
  } else {
    res
      .status(200)
      .send(`Verified: The number ${number} is a Positive number.`);
  }
}

app.use(positiveIntegerHandler);
app.get("/check");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
