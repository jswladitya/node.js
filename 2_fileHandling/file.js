const { log } = require("console")
const fs = require("fs")
// in node.js fs stands for file system , i can use this builtin 'fs' package or module to interact with files

//NOTE : async & sync kind of does the same tasks , but always use async methods because its a non blocking code
// & async use kar rahe he toh since wo return kuch nahi karta islie ham call back bhi dete he as 3rd parameter


//WRITE OR CREATE FILE
//in a current directory i am creating a file named text.txt 
// sync...
// fs.writeFileSync("./test.txt", "hey there")

// async...
// fs.writeFile("./test.txt", "hey there", (err)=> {})




//READ FILES
//we made a file contacts.txt to read

//sync : result ko variable me store karana padta he & wo result return karta he
// const result = fs.readFileSync("./contacts.js", "utf-8")
//we pass 2nd parameter to tell file type

// console.log(result);


//async : koi result return nhi karta ye basicaly ek call back expect karga jiske ander me error & result dedunga
// fs.readFileSync("./contacts.js", "utf-8", (err, result) => {
//     if (err) {
//         console.log("error", err);
//     } else {
//         console.log(result);
//     }
// })


//UPDATE OR APPEND FILE
// fs.appendFileSync("./test.txt", `Hey There \n` )


//DELETE OR UNLINK 
// fs.unlinkSync("./test.txt")

//NOTE : also so many things we can achieve using 'fs' so, learn more