import Application from "../models/Application.js";
import Animal from "../models/Animal.js";

export const submitApplication = async (req, res) => {
  try {
    const adopterId = req.user.id;
    const { animalId, fullName, address, phoneNumber, livingSituation, reasonForAdopting, experienceWithPets } = req.body;

    const app = await Application.create({
      adopter: adopterId,
      animal: animalId,
      fullName, address, phoneNumber, livingSituation, reasonForAdopting, experienceWithPets
    });

    await Animal.findByIdAndUpdate(animalId, { adoptionStatus: "Pending" });

    res.json(app);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getApplicationsByAdopter = async (req, res) => {
  try {
    const apps = await Application.find({ adopter: req.user.id }).populate("animal");
    res.json(apps);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getAllApplications = async (req, res) => {
  try {
    const apps = await Application.find().populate("animal").populate("adopter", "fullName email");
    res.json(apps);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { status, remarks } = req.body;
    const app = await Application.findByIdAndUpdate(req.params.id, { status, remarks }, { new: true });

    if (status === "Approved" && app) {
      await Animal.findByIdAndUpdate(app.animal, { adoptionStatus: "Adopted" });
    } else if (status === "Rejected" && app) {
      await Animal.findByIdAndUpdate(app.animal, { adoptionStatus: "Available" });
    }

    res.json(app);
  } catch (err) { res.status(500).json({ error: err.message }); }
};