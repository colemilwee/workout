const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: Date,
  name: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  distance: {
    type: Number,
    default: null
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;