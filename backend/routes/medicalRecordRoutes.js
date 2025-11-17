import express from 'express';
import {
    addMedicalRecord,
    getMedicalRecordsByAnimal,
    getAllMedicalRecords,
    updateMedicalRecord
} from '../controllers/medicalRecordController.js';

import { authenticateUser, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/add", authenticateUser, addMedicalRecord);

router.get("/animal/:animalId", authenticateUser, getMedicalRecordsByAnimal);

router.get("/", authenticateUser, authorizeRoles('admin'), getAllMedicalRecords);
router.put("/:id", authenticateUser, authorizeRoles('admin'), updateMedicalRecord);

export default router;