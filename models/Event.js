const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  id: Number,
  description: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("events", eventSchema);
