const Img = require("../modelos/modelo");


async function postGif(req, res){
    const{name, imageurl} = req.body 
    const newImg = new Img({name, imageurl})
    try{
        const imgSave = await newImg.save()
        if (!imgSave){
            return res.status(400).send({status:400})
        }
            return res.status(200).send({status:200})
    }catch(error){
        return res.status(500).send({status:500})
    }
}

async function getGif(req, res){
    try {
        const gifsStored = await Img.find().lean().exec()
        return res.status(200).send({status:200, gif:gifsStored})
    } catch (err) {
        return res.status(500).send({status:500})
    }
    
}


module.exports = {postGif, getGif}