import express from 'express';
import {
    submitApplication,
    getApplicationsByAdopter,
    getAllApplications,
    updateApplicationStatus
} from '../controllers/applicationController.js';

import { authenticateUser, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/submit", authenticateUser, submitApplication);
router.get("/mine", authenticateUser, getApplicationsByAdopter);

router.get("/", authenticateUser, authorizeRoles('admin'), getAllApplications);
router.put("/:id/status", authenticateUser, authorizeRoles('admin'), updateApplicationStatus);

export default router;