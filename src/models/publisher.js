const mongoose = require("mongoose");
const { Schema } = mongoose;

const publisherSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  netWorth: {
    type: Number,
    trim: true
  }
});

const Publisher = mongoose.model("Publisher", publisherSchema);

module.exports = { Publisher };
