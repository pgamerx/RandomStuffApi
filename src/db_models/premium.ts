import mongoose from 'mongoose'

const new_keys = new mongoose.Schema({
    key:{
        type: String
    },
    email: {
        type: String,
        required: false
    },
    type:{
        required: true,
        type: String
    }
 });
 
 export default mongoose.model('premium api', new_keys);