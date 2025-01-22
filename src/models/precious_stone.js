const mongoose = require("mongoose");

const preciousStone = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  value: { type: Number },
});
// Crear modelo Workout
const Precious_stone = mongoose.model("Precious_stone", preciousStone);

module.exports = Precious_stone;
