const express = require('express');
const router = express.Router();
const { getAllCharacters } = require('../controllers/characterControllers');

// Ruta para obtener todos los entrenamientos
router.get('/players', getAllCharacters);

module.exports = router;