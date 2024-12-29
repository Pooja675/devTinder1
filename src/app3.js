const express = require("express")

const app = express()

//GET /user ---> Middleware chain ----> request handler

app.use("/", (req,res, next) => {
    //res.send("Hnadling /router")
    next()
})

app.get("/user", (req,res, next) => {
    console.log("Handling  /user route!!")
    next();
},
(req,res,next) => {
    //res.send("1st route handler")
    next()
},

(req,res,next) => {
    res.send("2nd route handler")
    //next()
},

)


app.listen("5555", () => {

    console.log("Server is successfully listening on port 5555....")
})