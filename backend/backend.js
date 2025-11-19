import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from "./routes/authRoutes.js";
import animalRoutes from './routes/animalRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import medicalRecordRoutes from './routes/medicalRecordRoutes.js';

dotenv.config();
const app = express();


app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000'
}));

app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);
app.use('/api/animals', animalRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/medical-records', medicalRecordRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the PAWdoption API');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});