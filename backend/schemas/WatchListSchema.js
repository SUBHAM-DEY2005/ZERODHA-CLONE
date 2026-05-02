const mongoose = require("mongoose");

const WatchListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  percent: {
    type: String,
    default: "0.00%",
  },
  isDown: {
    type: Boolean,
    default: false,
  },
});

module.exports = { WatchListSchema };