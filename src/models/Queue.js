import mongoose from 'mongoose';

const queueSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    isPriority: {
        type: Boolean,
        default: false
    },
    entryTime: {
        type: Date,
        default: Date.now
    },
    served: {
        type: Boolean,
        default: false
    },
    serveTime: Date
}, {
    timestamps: true
});

queueSchema.index({ isPriority: -1, entryTime: 1 });
queueSchema.index({ served: 1 }); 

export default mongoose.model('Queue', queueSchema);