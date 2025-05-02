import mongoose from 'mongoose'
import User from './User'

const queueSchema = new mongoose.Schema({
    
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
});


export default mongoose.model('Queue', queueSchema)

