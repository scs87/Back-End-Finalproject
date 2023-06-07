const {model, Schema} = require("mongoose");


const imgSchema = new Schema({
    name:{type:String, required:true},
    image: String
})


const imgModel = model("img", imgSchema)


module.exports = imgModel