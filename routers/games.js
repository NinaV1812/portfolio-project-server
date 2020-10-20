const { Router } = require("express");
const Game = require("../models").game;
const Participant = require("../models").participant;
const Choice = require("../models").choice;
const User = require("../models").user;
const GameMovie = require("../models").gameMovie;

const router = new Router();

router.post("/:code", async (req, res, next) => {
  const code = req.params.code;
  //   const code = 8276;
  const name = req.params.name;

  const game = await Game.findOne({
    where: { code: code },
    include: [GameMovie],
  });
  console.log("game", game);

  // const userId = 2;

  const newUser = await User.create({
    name: name,
  });

  console.log("user", newUser);

  const newParticipant = await Participant.create({
    gameId: game.id,
    userId: newUser.id,
  });

  console.log("particpant", newParticipant);
  res.status(200).send(game);
});

module.exports = router;
