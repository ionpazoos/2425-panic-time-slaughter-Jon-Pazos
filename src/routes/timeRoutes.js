const express = require('express');
const router = express.Router();
const { getAllTimes,postTime } = require('../controllers/timeControllers');

// Ruta para obtener todos los entrenamientos
router.get('/time', getAllTimes);
router.post('/time', postTime );

module.exports = router;