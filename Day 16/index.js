const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const url =
  "mongodb+srv://ProjectMateUser:CollegeProjectMate@cluster0.jf5gpvw.mongodb.net/";

function connectToMongoDB() {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
}

connectToMongoDB();

app.listen(port, () => console.log("Server running on port " + port));
