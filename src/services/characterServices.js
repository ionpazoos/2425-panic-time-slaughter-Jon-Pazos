const Character = require("../models/character");
const Saddlebag = require("../models/saddlebag");
const Weapon = require("../models/weapons");
const precious_stone = require("../models/precious_stone");
const character = require("../models/character");

// Servicio para obtener todos los entrenamientos
const getAllCharacters = async () => {
  try {
    const players = await Character.find()
      .populate("equipment.saddlebag")
      .populate("equipment.weapons")
      .populate("equipment.pouch.precious_stones")
      .exec();
    return players;
  } catch (error) {
    throw error;
  }
};

const rest = async () => {
  try {
    const players = await getAllCharacters();
    for (let i = 0; i < players.length; i++) {
      console.log("--------------------------");
      console.log("Before:")
      console.log("Name: " + players[i].name);
      console.log("Dexterity: " + players[i].stats.dexterity);
      console.log("Strength: " + players[i].stats.strength);
      
      for (let z = 0; z < 2; z++) {
        let number = Math.floor(Math.random() * 2) + 1;
        if (number === 1) {
          players[i].stats.dexterity += 1;
          console.log(players[i].name + "gain 1 of Dexterity");
        } else {
          players[i].stats.strength += 1;
          console.log(players[i].name + "gain 1 of Strength");
        }
      }
      console.log("After:")
      console.log("Name: " + players[i].name);
      console.log("Dexterity: " + players[i].stats.dexterity);
      console.log("Strength: " + players[i].stats.strength);
      players[i].save();
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllCharacters, rest };
