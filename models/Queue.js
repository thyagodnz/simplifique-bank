import mongoose from 'mongoose'
import User from './User'

const queueSchema = new mongoose.Schema({

    priority:
        { type: Boolean, default: false },
    list: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    createm: {
        type: Date,
        default: Date.now
    },
});


export default mongoose.model('Queue', queueSchema)

