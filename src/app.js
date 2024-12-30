const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json())

app.post("/signup", async (req, res) => {

  //Creating new instance of the user model
   const user = new User(req.body);

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
