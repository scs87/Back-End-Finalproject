const mongoose = require("mongoose");
const server = require("./database");


try{
    mongoose.connect("mongodb://localhost:27017");
    server.listen(3100, async () => {
        console.log(`Connected to: 3100`)
    })
} catch(error){
    throw new error();
}