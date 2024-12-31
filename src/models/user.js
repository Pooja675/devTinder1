const mongoose = require("mongoose");

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
  },
  password: {
    type: String,
    required: true,
    unique:true,
    lowercase:true,

  },
  age: {
    type: Number,
    min:18,
  },
  gender: {
    type: String,
    validate(value){
      if(!["male","female","others"].includes(value)){
        throw new Error("Gender data is not valid.")
      }
    },
  },
  photoUrl: {
    type: String,
    default:"https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png",
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

module.exports = mongoose.model("User", userSchema);
