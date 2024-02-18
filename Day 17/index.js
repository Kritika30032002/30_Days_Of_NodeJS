const mongoose = require("mongoose");

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

// Implement the addUserToDatabase function
async function addUserToDatabase(user) {
  try {
    // Create a new User object
    const newUser = new User(user);

    // Save the user to the database
    await newUser.save();

    console.log("User added successfully.");
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

// Test the function
addUserToDatabase({ username: "john_doe", email: "john@example.com" });
