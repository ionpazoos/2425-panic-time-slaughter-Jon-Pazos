const CharacterService = require('../services/characterServices');

const getAllCharacters = async (req, res) => {
  try {
    console.log("characters requested");
    const characters = await CharacterService.getAllCharacters();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).send({status: "Error obteniedo characters", error: error?.message})
  }
};


module.exports = { getAllCharacters};