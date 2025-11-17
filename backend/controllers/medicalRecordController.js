import e from "express";
import MedicalRecord from "../models/MedicalRecord.js";

export const addMedicalRecord = async (req, res) => {
  try {
    const staffId = req.user.id;
    const { animalId, recordType, notes, recordDate } = req.body;

    const rec = await MedicalRecord.create({
      animal: animalId,
      staff: staffId,
      recordType,
      notes,
      recordDate: recordDate || Date.now()
    });

    res.json(rec);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getMedicalRecordsByAnimal = async (req, res) => {
  try {
    const { animalId } = req.params;
    const recs = await MedicalRecord.find({ animal: animalId }).populate("staff", "fullName email");
    res.json(recs);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getAllMedicalRecords = async (req, res) => {
  try {
    const recs = await MedicalRecord.find().populate("animal staff", "name fullName email");
    res.json(recs);
  } catch (err) { res.status(500).json({ error: err.message }); }
}

export const updateMedicalRecord = async (req, res) => {
  try {
    const { recordType, notes, recordDate } = req.body;
    const rec = await MedicalRecord.findByIdAndUpdate(req.params.id, {
      recordType,
      notes,
      recordDate
    }, { new: true });
    res.json(rec);
  } catch (err) { res.status(500).json({ error: err.message }); }
};