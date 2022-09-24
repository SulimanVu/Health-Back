const mongoose = require("mongoose");

const muscleSchema = mongoose.Schema({
  name: String,
  img: String,
  training: [{ type: String }],
  description: String,
});

const Muscle = mongoose.model("Muscle", muscleSchema);

module.exports = Muscle;
