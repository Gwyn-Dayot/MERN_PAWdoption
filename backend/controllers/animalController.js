import Animal from "../models/Animal.js";

export const createAnimal = async (req, res) => {
  try {
    const animal = await Animal.create(req.body);
    res.json(animal);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const updateAnimal = async (req, res) => {
  try {
    const updated = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const deleteAnimal = async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    res.json(animal);
  } catch (err) { res.status(500).json({ error: err.message }); }
};