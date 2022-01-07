import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import  {TopicModel}  from "./topicModel/topicModel.js"

//import router from './routes/topic.js'

const app = express();
app.use(express.json())
app.use(cors())
//Topic API
app.post('/topic',async (req, res) => {
    const topicName = req.body.topicName;
   
    const newTopic = new TopicModel({topicName: topicName})

    try {
        await newTopic.save();
        res.status(201).json(newTopic)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
});
app.get('/topiclist',async (req, res) => {
    TopicModel.find({}, (err, result)=>{
        if(err){
            res.send(err)
        }
        res.send(result);
    })
});
app.put('/updatetopic', async (req, res)=>{
    const newTopic = req.body.newTopic;
    const id = req.body.id;
    try {
        await TopicModel.findById(id, (err, updateTopic) => {
            updateTopic.topicName = newTopic;
            updateTopic.save();
            
          });
    } catch (err) {
        console.log(err);
    }
})
app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await TopicModel.findByIdAndDelete(id).exec();
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
//mongoose.set('useFindAndModify', false);