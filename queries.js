const Game = require('./models').game
const GameMovie = require('./models').gameMovie
const User = require('./models').user
const Choice = require('./models').choice


const someQuery = async () => {
    try {
        const game = await Game.findByPk(1, {
            include: [
                { model: GameMovie, include: [Choice] },
                { model: User }
            ]
        })
        console.log(game.get({ plain: true }))
    } catch(e) {
        console.log(e.message)
    }
}

someQuery()