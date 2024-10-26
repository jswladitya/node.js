const mongoose = require("mongoose")

async function connectMongoDb(url){
//connecting db
mongoose.connect(url);
}

module.exports = {
    connectMongoDb
}