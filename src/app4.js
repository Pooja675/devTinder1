const express = require("express")

const app = express()

const {adminAuth, userAuth} = require("./middlewares/auth")

app.use("/admin", adminAuth)

app.post("/user/login", (req,res) => {

    res.send("User logged in successfully")
    
})

app.get("/user/data",userAuth, (req,res) => {
    res.send("User data sent")
})

app.get("/admin/getAllData", (req,res) => {
    res.send("All data sent")
})

app.get("/admin/deleteUser", (req,res)=> {
    res.send("Deleted all data")
})


app.get("/getUserData", (req,res) => {

    try {

        //Logic of db call and get user data
     throw new Error("gdsgdstyyt")
     res.send("User data sent")
        
    } catch (error) {

        res.status(500).send("Somthing went wrong")
        
    }
    
})

// app.use("/", (err, req,res, next) => {

//     if(err) {
//         // Log your error
//         res.status(500).send("Somthing went wrong")
//     }
// })


app.listen("5555", () => {
    console.log("Server is running successfully on port 55555....")
})