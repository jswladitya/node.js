const express = require('express')
const userRouter = require("./routes/user.routes")
const {connectMongoDb} = require("./connection.js")
const {logReqRes} = require("./middlewares/index.js")

const app = express()
const PORT = 8000

//connect db
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1').then(() => console.log("MongoDB Connected"))

//middleware
app.use(express.urlencoded({ extended: true }))

//middleware
app.use(logReqRes("log.txt"))

//routes
app.use('/api/users', userRouter) //koi bhi '/api/users' pe aye toh redirect karo userRouter pe
//userRoute ko call karta he , route controller ko call karta he , controller model ko change karta he

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`)
)