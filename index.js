const express = require("express");
const app = express();
const axios = require("axios");
const port = 4000;
const Game = require('./models').game
const GameMovie = require('./models').gameMovie
const User = require('./models').user
const Choice = require('./models').choice
const router = express.Router();



app.get("/genres", async(req,res,next) => {
    try{
        const response = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=0f9d53792bd5deaacc609c8e93ec4148&language=en-US`
              )
            console.log("response", response)
            res.status(200).send(response.data)         
    }catch (err) {
        next(err)
      }
        
    })

app.post('/set_up_game', async(req,res,next) => {
    // get from body genresIds and year

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0f9d53792bd5deaacc609c8e93ec4148&&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2010&with_genres=28%2C12%2C16`)
    
    
        console.log(response.data)
        //const {code, started} = req.body;
        // console.log("params of a game", {
        //     code,
        //   started  
        // })

        // ** generate code **
        // *** Create a game ***
    // const newGame = await Game.create({
    //     code: code,
    //     started: started
    // })

    // ** save movies to gameMovie with new game id (get frst 10 or something)**
    // ** send them back to game creator with code **
    //console.log("new game", newGame)
    res.send(response.data)

}catch(e) {
    next(e)
}
})
app.post("/",async(req,res,next) => {

        // insert into gameMovie table with new gameId

})

// get range and genre
//     // just fake for now
//     // do axios call to API
//     // get movies
//     // create a new game, so you get a new gameId
//     // insert into gameMovie table with new gameId
app.listen(port, () => console.log("listening on port " + port));

