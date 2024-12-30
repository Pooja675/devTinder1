const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //Creating new instance of the user model

  const user = new User({
    firstName: "Aarti",
    lastName: "Kumari",
    emailId: "aarti435@gmail.com",
    password: "aarti@8974",
  });

  try {
    await user.save();
    res.send("User added successfully!!");
  } catch (error) {
    res.status(400).send("Error saving the user:", error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen("5555", () => {
      console.log("Server is connected successfully on port 5555...");
    });
  })
  .catch(() => {
    console.log("Databse cannot be connected....");
  });
