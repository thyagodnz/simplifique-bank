import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectDataBase() {
    await mongoose.connect(process.env.DATABASE_URL);
}

export default connectDataBase;
