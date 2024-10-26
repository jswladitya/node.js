//making of http server
// const http = require("http")

// const myServer = http.createServer((req, res)=>{ 
//     // note : req ek object hota he jisme user, resourse & kis type ki req he insab ki information hoti he
//     console.log(req);

//     res.end("Hello from server")
// })
// //means, we created a http server jo ki koi bhi client se req ane pe ek response send karega "hello from server"

// myServer.listen(8000, () => console.log("server is listening...")
// )


//assignment
const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req, res)=>{ 

    // if(req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()}: ${req.url} New Req Received\n`
    const myUrl = url.parse(req.url) ;
    fs.appendFile("log.txt", log , (err, data) => {
        // jab log append ho jayega uske baad hi me user ko response send karunga
        switch(myUrl.pathname){
            case '/' : req.end("HomePage")
            break;

            case '/about' : req.end("i am aditya")
            break;

            default: res.end("404 not found")
        }
    } )
})

myServer.listen(3000, () => console.log("server started")
)

//Its an ugly looking code so we will be using express framework
//express me ye sab already builtin he