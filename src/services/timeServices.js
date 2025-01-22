const Time = require("../models/time");

const CharacterService = require("../services/characterServices");

// Servicio para obtener todos los entrenamientos
const getAllTimes = async () => {
  return await Time.find();
};

const postTime = async () => {
  console.log("MAÑANA(5:00 horas)");
  const characters = await CharacterService.rest();
  
};

module.exports = { getAllTimes,postTime };
