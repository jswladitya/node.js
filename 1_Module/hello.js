const {add, sub} = require("./math.js")
//jo hamne export kia tha wahi yaha hamne import or require kia he current directory se destructure karke nikal lia

console.log("Addition of 21 & 3 :", add(21, 3));
console.log("Subraction of 21 & 3 :", sub(21, 3));



//CONCLUSION : js supports modulur approach means codebase ko chunks me tod ke alag alag files me likh sakte ho & unhe fir export & import or require kar ke unhe connect karsakte ho baki modulus(.js files) ke sath