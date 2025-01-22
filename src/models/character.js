const mongoose = require("mongoose");
const PreciousStone = require("./precious_stone");
const Saddlebag = require("./saddlebag");
const Time = require("./time");
const Weapons = require("./weapons");

const StatsSchema = new Schema({
  strength: { type: Number },
  dexterity: { type: Number },
  stamina: { type: Number },
});
const PouchSchema = new Schema({
  coins: { type: Number },
  gold: { type: Number },
  preciusStone: { type: [PreciousStone] },
});

const EquipmentSchema = new Schema({
  saddlebag: { type: [Saddlebag] },
  quiver: { type: Number },
  weapons: { type: [Weapons] },
  Pouch: { type: PouchSchema },
  miscellaneous: { type: [String] },
});

const characterSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  description: { type: String, required: true },
  stats: { type: StatsSchema, required: true },
  equipment: { type: EquipmentSchema, required: true },
});

// Crear modelo Workout
const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
