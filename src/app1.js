const express = require("express")

const app = express()

app.get("/user", (req,res) => {
    console.log( req.query)
    res.send({firstName:"Pooja", lastName: "Kumari"})
})

app.get("/user/:userId/:name/:password", (req,res) => {
    console.log( req.params)
    res.send({firstName:"Pooja", lastName: "Kumari"})
})

app.post("/user", (req,res) => {
    res.send("Data successfully saved in the database....")
})

app.delete("/user", (req,res) => {
    res.send("Data deleted successfully....")
})

app.use("/test",(req, res) => {
    res.send("Hello from server!")
})


app.listen(5555, () => {
    console.log("Server is successfully listening on port 5555....")
})