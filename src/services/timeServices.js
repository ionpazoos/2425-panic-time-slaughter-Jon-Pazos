const Time = require("../models/time");

const CharacterService = require("../services/characterServices");

// Servicio para obtener todos los entrenamientos
const getAllTimes = async () => {
  return await Time.find();
};

const postTime = async () => {
  console.log("MAÑANA(5:00 horas)");
  console.log("Rest");
  const rest = await CharacterService.rest();
  console.log("Recolect");
  const recolct = await CharacterService.recolect();
  console.log("MEDIODIA(12:00 horas)");
  console.log("travesia");
  const tavesia = await travesia();
  console.log("TARDE(17:00 horas)");
  console.log("Catatonia");
  const catatonia = CharacterService.catatonia();


  
};

const travesia = async () => {
    console.log("Dice rolling...");
    let number = Math.floor(Math.random() * 10) + 1;
    console.log("Congrtas you  move " + number + "Km");
    return number;   
  };

module.exports = { getAllTimes,postTime };
