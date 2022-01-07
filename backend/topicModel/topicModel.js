import mongoose from 'mongoose';
import internal from 'stream';
const schema = mongoose.Schema({
    topicName: {
        type: String,
        require: true
    }
})
export const TopicModel = mongoose.model('TopicModel', schema)