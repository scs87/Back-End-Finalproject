const express = require("express");
const controlador = require("../controladores/controlador");
const api = express.Router();


api 
    .post('/gif', controlador.postGif)
    .get('/gif',  controlador.getGif)

module.exports = api;