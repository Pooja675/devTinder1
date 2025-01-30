const express = require("express")
const {userAuth} = require("../middlewares/auth")
const {validateEditProfileData} = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt")

const profileRouter = express.Router();


profileRouter.get("/profile/view", userAuth, async (req,res) => {

  try {

  const user = req.user
  //console.log(cookies)
  res.send(user)
  } catch (err) {
    res.status(400).send("Error : " + err.message)
  }
  
}) 

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {

    try {
        if(!validateEditProfileData(req)){
            throw new Error("Invalid edit Request!!")
        }

        const loggedInUser = req.user; //taking the userAuth data or loggedIn user
        //console.log(loggedInUser)

        Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]))
        //console.log(loggedInUser)

        await loggedInUser.save();
        
        res.json({message:`${loggedInUser.firstName}, your profile updated successfully.`, data: loggedInUser})
    } catch (err) {
        res.status(400).send("Error : " + err.message)
    }
})

profileRouter.patch("/profile/forgot-password", userAuth, async (req,res) => {
  try {

    const {emailId, password, newPassword} = req.body;

    const user = await User.findOne({emailId : emailId})
    if(!user){
      throw new Error("User not found!!!")
    }

    const isPasswordValid = await user.validatePassword(password)
    if(!isPasswordValid){
      throw new Error("Existing password is incorrect!!!")
    }

    // Hash new password
    const newPasswordHash = await bcrypt.hash(newPassword,10)
    console.log("New Password:" + newPasswordHash)

    // Update password (simulate DB update)
    user.password = newPasswordHash;

    await user.save()

    res.status(200).send('Password updated successfully');

    
  } catch (err) {
    res.status(400).send("Error : " + err.message)
}
})

module.exports = profileRouter;