const mongoose = require("mongoose");

const muscleSchema = mongoose.Schema({
    name: String,
    img: String,
    training: String,
    description: String
});

const Muscle = mongoose.model("Muscle", muscleSchema)

module.exports = Muscle