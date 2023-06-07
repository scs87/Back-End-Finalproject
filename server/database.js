const express = require("express");
const cors = require("cors");
const app = express();
//const mongoose = require("mongoose");

app.use(express.json());
app.use(cors({
    origin: ['http://localhost3000']
}))

app.use("/api", routes)

module.exports = app;