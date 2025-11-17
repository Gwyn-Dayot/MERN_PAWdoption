import express from 'express';
import {
    scheduleAppointment,
    getAppointmentsByUser,
    getAllAppointments,
    updateAppointmentStatus
} from '../controllers/appointmentController.js';

import { authenticateUser, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/schedule", authenticateUser, scheduleAppointment);
router.get("/mine", authenticateUser, getAppointmentsByUser);

router.get("/", authenticateUser, authorizeRoles('admin'), getAllAppointments);
router.put("/:id/status", authenticateUser, authorizeRoles('admin'), updateAppointmentStatus);

export default router;