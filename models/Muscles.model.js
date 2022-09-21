const mongoose = require("mongoose");

const muscleSchema = mongoose.Schema({
    name: String,
    discription: String
});

const Muscle = mongoose.model("Muscle", muscleSchema)

module.exports = Muscle