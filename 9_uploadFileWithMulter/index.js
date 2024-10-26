const path = require("path")
const multer = require("multer")
const express = require("express");
const { log } = require("console");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs")
app.set("view", path.resolve("./views"))

//multer file upload storage configuration
const storage = multer.diskStorage({
    // where to upload file
    destination: function (req, file, cb){
        return cb(null, './uploads')
    }, 

    // what shld be the name of file
    filename: function (req, file, cb){
        return cb(null, `${Date.now()} - ${file.originalname}`)
    },
})

const upload = multer({storage})

app.use(express.urlencoded({extended: false})); //form data passing to req.body

app.get("/", (req, res)=>{
    return res.render("homepage")
})

app.post("/upload", upload.single('profileImage') , (req, res)=>{
    console.log(req.body)
    console.log(req.file)

    return res.redirect("/");
     
})

app.listen(PORT, () => console.log(`Server is listening at port : ${PORT}`))