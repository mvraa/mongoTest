const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  genre: {
      type: String,
      trim: true
  },
  publisherFK: {
      type: String,
      trim: true
  }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = { Game };