import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    appointementID: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    animalID: { type: mongoose.Schema.Types.ObjectId, ref: 'Animal', required: true },
    scheduledDate: { type: Date, required: true },
    remarks: String,
});

export default mongoose.model('Appointment', userSchema);