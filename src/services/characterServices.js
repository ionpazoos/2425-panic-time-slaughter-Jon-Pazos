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
      console.log("Before:");
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
      console.log("After:");
      console.log("Name: " + players[i].name);
      console.log("Dexterity: " + players[i].stats.dexterity);
      console.log("Strength: " + players[i].stats.strength);
      players[i].save();
    }
  } catch (error) {
    throw error;
  }
};

const recolect = async () => {
  try {
    const players = await getAllCharacters();
    for (let i = 0; i < players.length; i++) {
      console.log("--------------------------");
      console.log("Name: " + players[i].name);

      let number = Math.floor(Math.random() * 100) + 1;
      console.log("dice falls on " + number);

      if (number <= 30) {
        players[i].equipment.pouch.gold++;
        console.log(players[i].name + "gain 1 gold");
      } else if (number > 30 && number <= 80) {
        let dice = Math.floor(Math.random() * 20) + 1;
        console.log("player rolls de dice and falls on " + dice);
        console.log("before: " + players[i].equipment.pouch.coins);
        players[i].equipment.pouch.coins += dice;
        console.log("after: " + players[i].equipment.pouch.coins);
        console.log(players[i].name + " gains " + dice + " coins");
      } else {
        const stones = await getAllStones();
        let index = Math.floor(Math.random() * stones.length);
        players[i].equipment.pouch.precious_stones.push(stones[index]._id);
        console.log(
          players[i].name + " gains a precius Stone: " + stones[index].name
        );
      }
      players[i].save();
    }
    console.log("Finished recolection");
  } catch (error) {
    throw error;
  }
};
const catatonia = async () => {
  try {
    const players = await getAllCharacters();

    console.log("Jokers trhow de dice...");
    let number = Math.floor(Math.random() * players.length) + 1;
    console.log(number + "!");
    console.log(players[number].name + "Starts");
    catatoniaActions(players[number]);

    const ordederPlayers = players.sort((a, b) => {
      const dexterityA = a.stats.dexterity;
      const dexterityB = b.stats.dexterity;
      return dexterityB - dexterityA;
    });

    for (let i = 0; i < ordederPlayers.length; i++) {
      if (
        ordederPlayers[i].occupation === "joker" ||
        players[number]._id === ordederPlayers._id
      ) {
        i++;
      }
      console.log("--------------------------");
      console.log(
        "Name: " +
          ordederPlayers[i].name +
          " with occupation " +
          ordederPlayers[i].occupation
      );
      catatoniaActions(ordederPlayers[i]);
    }
    console.log("Finished catatonia");
  } catch (error) {
    throw error;
  }
};

const catatoniaActions = (player) => {
  switch (player.occupation) {
    case "priest":
      console.log("priest in action");
      
      break;
    case "thug":
      console.log("thug in action");

      break;
    case "peasant":
      console.log("peasant in action");

      break;
    case "gambler":
      console.log("gambler in action");

      break;
    case "mage":
      console.log("mage in action");

      break;
    case "warrior":
      console.log("warrior in action");

      break;
    default:
      console.log("no occupation find : " + player.occupation);

      break;
  }
};
const getAllStones = async () => {
  try {
    const Stones = await precious_stone.find();
    return Stones;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllCharacters, rest, recolect, catatonia};
