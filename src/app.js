const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  //Creating new instance of the user model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully!!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

//GET users by emailId

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("User not found.");
    } else {
      res.send(user);
    }

    // const users = await User.find({ emailId: userEmail });
    // if(users.length === 0){
    //     res.status(404).send("User not found.")
    // }else{
    //     res.send(users)
    // }
  } catch (error) {
    res.status(400).send("Something went wrong.");
  }
});

//Feed API --- GET /feed --- get all users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Somthing went wrong.");
  }
});

//Delete the user
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    // const user = await User.findByIdAndDelete({_id:userId})
    const user = await User.findByIdAndDelete(userId);

    res.send("User deleted successfully");
  } catch (error) {
    res.status(400).send("Somthing went wrong.");
  }
});

//API level validation
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {

    const ALLOWED_UPDATES = [
      "userId",
      "photoUrl",
      "about",
      "age",
      "skills",
      "gender"
    ];

    const isUpdatedAllowed = Object.keys(data).every((k) => ALLOWED_UPDATES.includes(k))

    if(!isUpdatedAllowed){

      throw new Error("Update is not allowed.")
    }

    if(data?.skills.length > 10){
      throw new Error("Skills cannot be more than 10")
    }


    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Update Failed:" + err.message);
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
