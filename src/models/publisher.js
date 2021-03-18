const mongoose = require("mongoose");
const { Schema } = mongoose;

const publisherSchema = new Schema({
  id: {
    type: Number,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  netWorth: {
    type: Number,
    trim: true
  }
});

const Publisher = mongoose.model("Publishers", publisherSchema);

module.exports = { Publisher };