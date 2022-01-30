import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import  {CategoriesModel}  from "./Model/categoriesModel.js";
import { articleModel } from './Model/articleModel.js';
import  mongodb  from "mongodb";
import cheerio from 'cheerio';
import request from 'request-promise';


const app = express();
app.use(express.json())
app.use(cors())
//Topic API
app.post('/category',async (req, res) => {
    const category = req.body.category;
   
    const newCategory = new CategoriesModel({category: category})

    try {
        await newCategory.save();
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
});
app.get('/categories',async (req, res) => {
    CategoriesModel.find({}, (err, result)=>{
        if(err){
            res.send(err)
        }
        res.send(result);
    })
});

app.put('/updatecategory', async (req, res)=>{
    const newCategory = req.body.newCategory;
    const id = req.body.id;
    try {
        await CategoriesModel.findById(id, (err, updateCategory) => {
            updateCategory.category = newCategory;
            updateCategory.save();
            
          }).clone();
   } catch (err) {
        console.log(err)
    }
})
app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await CategoriesModel.findByIdAndDelete(id).exec();
    res.send("delete");
    
})
//User API


app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))


const CONNECTION_URL = 'mongodb+srv://lathiha:20194266@cluster0.nq5m6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => app.listen(PORT, ()=> console.log(`Sever running on ${PORT}`)))
.catch((error) => console.log(error.message));


app.post('/article', async (req, res) => {
    
    try {
        const newArticle = req.body;
        const article = new articleModel(newArticle)
        await article.save();
        res.status(201).json(article);
                
    } catch (error) {
        res.status(409).json({message: error.message})
    }
});
app.get('/article', async(req, res) => {
    try {
        const article = await articleModel.find();
        res.status(200).json(article);
      } catch (err) {
        res.status(500).json({ error: err });
      }
} )
app.get('/article/:id', async(req, res)=>{
    const id  = req.params.id;
    try {
        const article = await articleModel.findById(id);
        console.log(article)
        res.status(200).json(article);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

app.put('/updateArticle/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const modifiedArticle = req.body;
        console.log(modifiedArticle)
        await articleModel.updateOne({ _id: id }, { $set: modifiedArticle });
        res.json({
            success: true,
            data: modifiedArticle
        })
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to modified student"
        });
    }
})
app.delete('/deleteArticle/:id', async (req, res) => {
    const id = req.params.id;
    await articleModel.findByIdAndDelete(id).exec();
    res.send("delete");
})


