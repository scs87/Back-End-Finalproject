const img = require("../modelos/modelo");


async function postImg(req, res){
    const{name, image} = req.body 
    const newImg = new img({name, image})
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


module.exports = {postImg}