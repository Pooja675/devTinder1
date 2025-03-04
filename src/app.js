
const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser")
const app = express()
const cors = require("cors")

require('dotenv').config()

app.use(express.json());
app.use(cookieParser())
app.use(cors({

  origin:"http://localhost:5173",
  credentials: true,
}))

const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter)
app.use("/", profileRouter)
app.use("/", requestRouter)
app.use("/", userRouter)


connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(process.env.PORT, () => {
      console.log("Server is connected successfully on port 5555...");
    });
  })
  .catch(() => {
    console.log("Databse cannot be connected....");
  });
