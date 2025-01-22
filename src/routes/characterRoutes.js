const express = require('express');
const router = express.Router();
const { getAllWorkouts, createWorkout } = require('../controllers/workoutController');

// Ruta para obtener todos los entrenamientos
router.get('/players', getAllWorkouts);

module.exports = router;