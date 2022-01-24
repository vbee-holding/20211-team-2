import mongoose from "mongoose";

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
    category: {
        type: String
    },
    time: {
        type: Date
    }  
});

export const articleModel = mongoose.model('articalModel', articleSchema)
