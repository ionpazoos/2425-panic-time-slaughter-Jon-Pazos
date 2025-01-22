const express = require('express');
const router = express.Router();
const { getAllTimes } = require('../controllers/timeControllers');

// Ruta para obtener todos los entrenamientos
router.get('/time', getAllTimes);
router.post('/time', );

module.exports = router;