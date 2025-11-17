import express from 'express';
import {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAllAnimals,
    getAnimalById
} from '../controllers/animalController.js';

import { authenticateUser } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllAnimals);
router.get('/:id', getAnimalById);

router.post('/', authenticateUser, createAnimal);
router.put('/:id', authenticateUser, updateAnimal);
router.delete('/:id', authenticateUser, deleteAnimal);

export default router;