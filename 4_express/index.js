//express mere code ko clean rakhta he & routing ko handle karna easy kar deta he
const express = require("express")

const app = express()

app.get("/", (req, res)=>{
    return res.send("Hello from server")
})

//making query request : /about?name=aditya&age=21
app.get("/about", (req, res)=>{
    return res.send(`hello my name is ${req.query.name} and i am ${req.query.age}`)    
})

app.listen(8000, ()=>{
    console.log("server started");
})