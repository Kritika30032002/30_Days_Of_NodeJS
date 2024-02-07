const express = require("express");
const app = express();
const port = 3000;

function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  console.log(`${timestamp} - ${method} request received`);
  next();
}

app.use(requestLoggerMiddleware);
app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(port, () => `Server is running on port ${port}`);
