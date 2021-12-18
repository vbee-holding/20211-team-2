const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String
    },
    sapo: {
        type: String
    },
    source: {
        type: String
    },
    categories: {
        type: String
    },
    time: {
        type: Date
    }  
});

module.exports = mongoose.model('Article', articleSchema);