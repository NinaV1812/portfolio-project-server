const { Router } = require("express");
const axios = require("axios");
const Game = require("../models").game;
const Participant = require("../models").participant;
const Choice = require("../models").choice;
const User = require("../models").user;
const GameMovie = require("../models").gameMovie;

const router = new Router();

router.get("/:gameId", async (req, res, next) => {
  // const code = req.params.code;
  const gameId = req.params.gameId;

  const gameMovies = await GameMovie.findAll({
    where: { gameId: gameId },
    include: {
      model: Choice,
      where: { picked: true, gameId: gameId },
      required: true,
    },
  });

  gameMovies.sort((movie_a, movie_b) => {
    return movie_b.choices.length - movie_a.choices.length;
  });

  console.log("gameMovie", gameMovies);
  console.log("game id", gameId);

  // const userId = 2;

  res.status(200).send(gameMovies);
});

module.exports = router;
