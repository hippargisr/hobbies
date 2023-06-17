// require("dotenv").config();
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/hobbies');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

export default connectDB;
