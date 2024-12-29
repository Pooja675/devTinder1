const express = require("express")

const app = express()

//app.get("/route", rh1,[rh2,rh3],rh4,rh5)

app.get("/user", (req,res, next) => {
    console.log("Handling the route user!!")
    next();
},
(req,res,next) => {
    console.log("Handling the route user 2!!")
    //res.send("2nd response")
    next()
},

(req,res,next) => {
    console.log("Handling the route user 3!!")
    //res.send("3rd response")
    next()
},

(req,res,next) => {
    console.log("Handling the route user 4!!")
    //res.send("4th response")
    next()
},

(req,res,next) => {
    console.log("Handling the route user 5!!")
    res.send("5th response")
    //next()
},

)


app.listen("5555", () => {

    console.log("Server is successfully listening on port 5555....")
})