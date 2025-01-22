const Time = require('../models/time');
const TimeServices = require('../services/timeServices');

const getAllTimes = async (req, res) => {
  try {
    console.log("Times requested");
    const times = await TimeServices.getAllTimes();
    res.status(200).json(times);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo times' });
  }
};

module.exports = { getAllTimes};