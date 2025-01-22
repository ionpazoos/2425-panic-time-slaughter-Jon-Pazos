const mongoose = require("mongoose");

const time = new Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  day_number: { type: Number },
  day_week: { type: String, required: true },
  km_traveled: { type: Number },
  km_total: { type: Number },

});

// Crear modelo Workout
const Time = mongoose.model("Time", time);

module.exports = Time;
