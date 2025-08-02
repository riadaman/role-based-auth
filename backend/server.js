import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';

const app = express();

dotenv.config();

connectDB();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
app.use(cookieParser());


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});