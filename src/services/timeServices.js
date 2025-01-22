const Time = require('../models/time');

// Servicio para obtener todos los entrenamientos
const getAllTimes = async () => {
  return await Time.find();
};

module.exports = { getAllTimes};