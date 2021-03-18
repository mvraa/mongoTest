const publisher = require("./getPublisher");
const game = require("./getGame");
const gameByGenre = require("./gameByGenre");
const publishers = require("./getPublishers");
const games = require("./getGames");

module.exports = {
  gameByGenre,
  publisher,
  game,
  publishers,
  games
}