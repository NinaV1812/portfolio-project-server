const express = require("express");
const app = express();
const axios = require("axios");
const port = 4000;
const http = require("http").createServer(app);
const Game = require("./models").game;
const GameMovie = require("./models").gameMovie;
const User = require("./models").user;
const Choice = require("./models").choice;
const Participant = require("./models").participant;
const bodyParser = require("body-parser");
const gameRouter = require("./routers/games");
const gameMovieRouter = require("./routers/game-movies");

const router = express.Router();
var io = require("socket.io")(http);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.get("/genres", async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=0f9d53792bd5deaacc609c8e93ec4148&language=en-US`
    );
    console.log("response", response.data.genres);
    res.status(200).send(response.data.genres);
  } catch (err) {
    next(err);
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
  socket.on("swipe", (action) => {
    console.log("swipe: " + action);
    io.emit("swipe", action);
  });
});

io.emit("some event", {
  someProperty: "some value",
  otherProperty: "other value",
}); // This will emit the event to all connected sockets

app.get("/game_movies", async (req, res, next) => {
  try {
    console.log("genres we got on backend: ", req.body.genres);
    const genres = req.body.genres;
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=0f9d53792bd5deaacc609c8e93ec4148&&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2010&with_genres=28%2C12%2C16`
    );

    res.status(200).send(response.data.results);
  } catch (err) {
    next(err);
  }
});

app.post("/set_up_game", async (req, res, next) => {
  // get from body genresIds and year

  try {
    const { started } = req.body;
    const { name } = req.body;
    console.log(req.body);
    const code = Math.floor(Math.random() * 10000);

    const newGame = await Game.create({
      code: code,
      started: started,
    });
    console.log("new game", newGame);

    const newUser = await User.create({
      name: name,
    });

    console.log("user", newUser);

    const newParticipant = await Participant.create({
      gameId: newGame.id,
      userId: newUser.id,
    });
    console.log("particpant", newParticipant);

    res.status(200).send(newGame);
  } catch (e) {
    next(e);
  }
});

app.post("/movies_in_game", async (req, res, next) => {
  const { id } = req.body.movie;
  const { gameId } = req.body;
  const { title } = req.body.movie;
  console.log("req body", req.body.movie);
  console.log("title", title);
  try {
    const overview = "overview";
    const picked = true;

    const newGameMovie = await GameMovie.create({
      gameId: gameId,
      movieId: id,
      overview: overview,
      title: title,
    });

    const newChoice = await Choice.create({
      gameMovieId: newGameMovie.id,
      userId: 3,
      gameId: gameId,
      picked: picked,
    });

    console.log("new choice", newChoice);

    // console.log("new game movie", newGameMovie);
    res.status(200).send(newGameMovie);
  } catch (e) {
    next(e);
  }
});

app.post("/participant", async (req, res, next) => {
  try {
    // const gameId = 5;
    // const userId = 3;
    const { gameId, userId } = req.body;
    console.log("req body", req.body);

    const newParticipant = await Participant.create({
      gameId: gameId,
      userId: userId,
    });
    res.status(200).send(newParticipant);
  } catch (e) {
    next(e);
  }
});

//ask about user and changing on this step
app.post("/user", async (req, res, next) => {
  try {
    const name = "ololo";
    const email = "ololo.com";
    const password = 999;

    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(200).send(newUser);
  } catch (e) {
    next(e);
  }
});

app.use("/game", gameRouter);
app.use("/game_movie", gameMovieRouter);

app.listen(port, () => console.log("listening on port " + port));
http.listen(3000, () => {
  console.log("listening on *:3000");
});
