const {model, Schema} = require("mongoose");


const imgSchema = newSchema({
    name:{type:String, required:true},
    image:string
})


const imgModel = model("img", imgSchema)


module.exports = imgModel