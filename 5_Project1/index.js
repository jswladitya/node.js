const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')

const app = express()
const PORT = 8000

// middleware
//jab bhi koi form data ayega use body me daalne ka kaam karega ,means decode karega & add karega re.body me
app.use(express.urlencoded({ extended: true }))

//middleware 2
app.use((req, res, next) => {
    fs.appendFile('log.txt', `\n ${Date.now()} : ${req.method} : ${req.path} \n`, (err, data) => {
        next();
    })
})

//routes
//yaha html document karwa ke bhejne wale he -> ye hoga ager browser se jab koi req karega
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`)}
    </ul>
    `
    res.send(html)
})


//yaha json data bhejne wale he jo client render karega -> ye hoga ager app se jab koi req karega 
app.get("/api/users", (req, res) => {
    return res.json(users)
})

// app.get("/api/users/:id",(req, res) =>{
//     const id = Number(req.params.id)
//     const user = users.find((user)=> user.id ===id)
//     //user ki id = hamari bheji hui id 
//     return res.json(user)
// })



// user ko edit karna he islie uski id chahiye hogi
// app.patch("/api/users/:id", (req, res)=>{
//     //todo : edit the user with id
//     return res.json({status:"pending"})
// })


// app.delete("/api/users/:id", (req, res)=>{
//     //todo : delete the user with id
//     return res.json({status:"pending"})
// })

//COMBINING OF SAME ROUTING 

app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id)
        const user = users.find((user) => user.id === id)
        //user ki id = hamari bheji hui id 
        if(!user) return res.status(404).json({error : "user not found"})
        return res.json(user)
    })
    .patch((req, res) => {
        //Assignment : Edit user with id
        return res.json({ status: "pending" })
    })
    .delete((req, res) => {
        //Assignment : delete user with id
        return res.json({ status: "pending" })
    });

app.post("/api/users", (req, res) => {

    //abhi express ko nahi pata ki body me data daalna kaise he islie we use midleware
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || !body.job_title) {
        return res.status(400).json({ msg: "all fields are required" })
    }
    //ab hamare pass data aa gaya he hame append karna he is data ko file me
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: "success", id: users.length })
    })
});

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`)
)