const express = require("express");
const controlador = require("../controladores/controlador");
const api = express.Router();


api 
    .post('/img', controlador.postImg)

module.exports = api;