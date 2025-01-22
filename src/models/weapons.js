const mongoose = require("mongoose");

const weapon = new Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  num_die_damage: { type: Number },
  type: { type: String, required: true },
  quality: { type: Number },
});

// Crear modelo Workout
const Weapon = mongoose.model("Weapon", weapon);

module.exports = Weapon;
