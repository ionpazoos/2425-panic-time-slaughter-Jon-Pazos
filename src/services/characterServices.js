const Character = require("../models/character");
const Saddlebag = require("../models/saddlebag");
const Weapon = require("../models/weapons");
const precious_stone = require("../models/precious_stone");



// Servicio para obtener todos los entrenamientos
const getAllCharacters = async () => {
  try {
    const players = await Character.find()
      .populate("equipment.saddlebag")
      .populate("equipment.weapons")
      .populate("equipment.pouch.precious_stones")
      .exec();
    return players;
  } catch (error) {
    throw error;
  }
};

// Servicio para crear un nuevo entrenamiento
const createWorkout = async (workoutData) => {
  const workout = new workout(workoutData);
  return await workout.save();
};

module.exports = { getAllCharacters, createWorkout };
