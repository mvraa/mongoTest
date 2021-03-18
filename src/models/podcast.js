const mongoose = require("mongoose");
const { Schema } = mongoose;

const podcastSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  },
  episode: {
    type: Int,
    trim: true
  }
});

const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = { Podcast };
