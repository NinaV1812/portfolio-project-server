const { Router } = require("express");
const axios = require("axios");
const Game = require("../models").game;
const Participant = require("../models").participant;
const Choice = require("../models").choice;
const User = require("../models").user;
const GameMovie = require("../models").gameMovie;

const router = new Router();

router.post("/:code", async (req, res, next) => {
  const code = req.params.code;
  //   const code = 8276;
  const { name } = req.body;

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

router.patch("/:id", async (req, res, next) => {
  const gameToUpdate = await Game.findByPk(req.params.id);
  const { genres } = req.body;
  await gameToUpdate.update({ genres });
  // console.log("genres", genres);

  const moviesResponse = await axios.get(`
  https://api.themoviedb.org/3/discover/movie?api_key=0f9d53792bd5deaacc609c8e93ec4148&&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres.join(
    ","
  )}`);
  // console.log("movies res", moviesResponse.data.results);
  const myTenMovies = moviesResponse.data.results.slice(10);

  // console.log("my ten movies", myTenMovies);

  // const yourTenMovies = await Promise.all(
  myTenMovies.map((movie) => {
    return GameMovie.create({ gameId: gameToUpdate.id, movieId: movie.id });
  });

  console.log("your ten movies", myTenMovies);
  return res.status(200).send(myTenMovies);
});

router.post("/choice", async (req, res, next) => {
  try {
    const gameMovieId = 5;
    const userId = 3;
    const picked = true;

    const newChoice = await Choice.create({
      gameMovieId: gameMovieId,
      userId: userId,
      picked: picked,
    });
    res.status(200).send(newChoice);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
