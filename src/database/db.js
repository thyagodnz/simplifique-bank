import mongoose from 'mongoose'

async function connectDataBase() {
    await mongoose.connect(
        'mongodb+srv://thyago:iWEg6QpkipCC3rHh@cluster0.xain9id.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0'
    )
}

export default connectDataBase
