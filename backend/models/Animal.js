import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    animalID: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    name: String,
    species: String,
    gender: String,
    breed: String,
    age: Number,
    adoption_status: {
        type: String,
        enum: ['Available', 'Adopted', 'Pending'],
        default: 'Available'
    },
    imageUrl: String
});

const Animal = mongoose.model('Animal', animalSchema);
export default Animal;