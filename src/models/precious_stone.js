const mongoose = require("mongoose");

const preciousStone = new Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  value: { type: Number },
});

// Crear modelo Workout
const PreciousStone = mongoose.model("PreciusStone", preciousStone);

module.exports = PreciousStone;
