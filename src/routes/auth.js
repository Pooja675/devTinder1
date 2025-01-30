const express = require("express")
const {validateSignUpData} = require("../utils/validation")
const bcrypt = require("bcrypt")
const User = require("../models/user");
const jwt = require("jsonwebtoken")
const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {

  try {
  //validation of data
  validateSignUpData(req)
  const {firstName, lastName, emailId, password} = req.body;

  //Encrypt password

  const passwordHash = await bcrypt.hash(password,10)
  console.log(passwordHash)

  //Creating new instance of the user model
  const user = new User({
    firstName,
    lastName,
    emailId,
    password: passwordHash,
  });

  
    const savedUser = await user.save();
    const token = await user.getJWT();

    // Add a token to a cookie and send the response back to the user
    res.cookie("token", token, {expires: new Date(Date.now() + 8 * 3600000)})

    res.json({message: "User added successfully!!", data:savedUser});
  } catch (err) {
    res.status(400).send("Error :" + err.message);
  }
});

authRouter.post("/login", async (req,res) => {

    try {
  
      const {emailId, password} = req.body
  
      const user = await User.findOne({emailId : emailId})
  
      if(!user){
        throw new Error("Invalid Credentials!!")
      }
  
      const isPasswordValid = await user.validatePassword(password)
      
      if(isPasswordValid){
  
        //Create JWT token 
  
        const token = await user.getJWT();
        //console.log(token)
  
        // Add a token to a cookie and send the response back to the user
        res.cookie("token", token, {expires: new Date(Date.now() + 8 * 3600000)})
          res.send(user)
      } else {
        throw new Error("Invalid Credentials!!")
      }
      
    } catch (err) {
      res.status(400).send("Error : " + err.message)
    }
  })
  

authRouter.post("/logout", async(req,res) => {

    res.cookie("token", null, {expires: new Date(Date.now())})
    res.send("Logout successfully!!")
})  

module.exports = authRouter;