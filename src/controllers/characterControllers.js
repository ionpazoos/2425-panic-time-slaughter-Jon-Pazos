const CharacterService = require('../services/characterServices');

const getAllCharacters = async (req, res) => {
  try {
    console.log("characters requested");
    const characters = await CharacterService.getAllCharacters();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).send({status: "Error obteniedo characters", error: error?.message})
  }
};

// Crear un nuevo entrenamiento
const createWorkout = async (req, res) => {
  try {
    const workout = await CharacterService.createWorkout(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: 'Error creando entrenamiento' });
  }
};

module.exports = { getAllCharacters, createWorkout };