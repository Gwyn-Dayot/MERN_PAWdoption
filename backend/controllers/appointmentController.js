import Appointment from "../models/Appointment.js";

export const scheduleAppointment = async (req, res) => {
  try {
    const adopterId = req.user.id;
    const { animalId, scheduleDate, purpose, applicationId } = req.body;

    const appt = await Appointment.create({
      animal: animalId,
      adopter: adopterId,
      application: applicationId,
      scheduleDate,
      purpose
    });

    res.json(appt);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getAppointmentsByUser = async (req, res) => {
  try {
    const list = await Appointment.find({ user: req.user.id }).populate("animal staff");
    res.json(list);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getAllAppointments = async (req, res) => {
  try {
    const list = await Appointment.find().populate("animal adopter staff");
    res.json(list);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const appt = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(appt);
  } catch (err) { res.status(500).json({ error: err.message }); }
};