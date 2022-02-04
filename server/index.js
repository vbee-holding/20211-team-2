require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {PORT, HOST, MONGO_URI} = require("./constants/constants");
const mainRouter = require('./routes');

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

const app = express();

app.use(express.json());
app.use(cors());

app.use(mainRouter);
app.use('/uploads', express.static('uploads'));

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
); 
