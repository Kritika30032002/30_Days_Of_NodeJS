const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const MONGO_URL =
  "mongodb+srv://ProjectMateUser:CollegeProjectMate@cluster0.jf5gpvw.mongodb.net/";

// Define the Mongoose schema for the User
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
});

// Create the Mongoose model for the User schema
const User = mongoose.model("User", userSchema);

// Connect Mongoose to your MongoDB database
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ UserData: users });
  } catch (err) {
    console.error("Error in fetching data: ", err);
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
