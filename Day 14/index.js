const express = require("express");
const app = express();
const port = 3000;

const caches = {};

function cachingMiddleware(req, res, next) {
  const url = req.url;
  if (caches.url && caches.timestamp > Date.now() - 60 * 1000) {
    console.log(`Cache response for the url ${url}`);
    return res.send(caches.url.data);
  }

  next();
}

app.use(cachingMiddleware);
app.get("/", (req, res) => {
  const url = req.url;
  caches.url = {
    data: "Hello World!",
    timestamp: Date.now(),
  };

  res.send(caches.url.data);
  console.log(`Cache response  ${caches.url.data}`);
});

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
