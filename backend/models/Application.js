import e from "express";
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    animalID: { type: mongoose.Schema.Types.ObjectId, ref: 'Animal', required: true },

    fullName: String,
    address: String,
    phoneNumber: String,
    reasonForAdoption: String,

    status: {
        type: String,
        enum: ['Pending','Under Review', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    appliedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Application', applicationSchema);