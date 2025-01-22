const mongoose = require("mongoose");

const saddlebag = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  recover_stamina: { type: Number },
});

const Saddlebag = mongoose.model("Saddlebag", saddlebag);

module.exports = Saddlebag;
