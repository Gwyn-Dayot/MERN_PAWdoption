import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    recordID: { type: mongoose.Schema.Types.ObjectId, ref: 'Medical_Record', required: true },
    animalID: { type: mongoose.Schema.Types.ObjectId, ref: 'Animal', required: true },
    record_Date: { type: Date, default: Date.now },
    record_Type: String,
    notes: String,
});

export default mongoose.model("Medical_Record", medicalRecordSchema);