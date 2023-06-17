require("dotenv").config();
import express from 'express';
import connectDB from './config/database';
import userRoutes from './routes/user.routes';
import hobbyRoutes from './routes/hobby.routes';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/hobbies', hobbyRoutes);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
