import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    priority: {
        type: Boolean,
        default: false
    },
    ticket: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('User', userSchema);
