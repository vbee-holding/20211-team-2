require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {PORT, HOST, MONGO_URI} = require("./constants/constants");

// connect to mongodb
mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(res => {
    console.log("connected to mongodb");
})
    .catch(err => {
        console.log(err);
    })

// use middleware to parse body req to json
app.use(express.json());

// use middleware to enable cors
app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.listen(PORT, HOST, () => {
    console.log("server start - " + PORT);
})