const {model, Schema} = require("mongoose");


const imgSchema = new Schema({
    name:{type:String, required:true},
    imageurl: String
})


const imgModel = model("Img", imgSchema)


module.exports = imgModel