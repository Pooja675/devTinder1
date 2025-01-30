const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength:4,
    maxLength:100,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    trim:true,
    lowercase:true,

    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid email address:" + value)
      }
    }

  },
  password: {
    type: String,
    required: true,
    unique:true,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("Enter the strong password:" + value)
      }
    }
  },
  age: {
    type: Number,
    min:18,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message: `{VALUE} is not a valid gender type.`
    },
    // validate(value){
    //   if(!["male","female","others"].includes(value)){
    //     throw new Error("Gender data is not valid.")
    //   }
    // },
  },
  photoUrl: {
    type: String,
    default:"https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png",
    validate(value){
      if(!validator.isURL(value)){
        throw new Error("Invalid photo url:" + value)
      }
    }
  },
  about: {
    type: String,
    default:"This is a default about the user."
  },
  skills: {
    type: [String],
  },
},
{
  timestamps: true,
});

userSchema.index({firstName:1})
userSchema.index({gender:1})

userSchema.methods.getJWT = async function() {
  const user = this;

  const token = await jwt.sign({ _id: user._id }, "DEV@Tinder987", { expiresIn: "7d" })

  return token;
}

userSchema.methods.validatePassword = async function(passwordInputByUser){

  const user = this;
  const passwordHash = user.password;

  const isPasswordValid = await bcrypt.compare(passwordInputByUser, passwordHash)

  return isPasswordValid;
}

module.exports = mongoose.model("User", userSchema);
