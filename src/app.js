const express = require("express")

const app = express()

app.use("/hello",(req, res) => {
    res.send("Hello hello hello!")
})

app.use("/test",(req, res) => {
    res.send("Hello from server!")
})

app.use("/",(req, res) => {
    res.send("Namaste Nodejs!")
})

app.listen(5555, () => {
    console.log("Server is successfully listening on port 5555....")
})