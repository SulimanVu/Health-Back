const Muscle = require('../models/Muscles.model')

module.exports.muscle = {
  getMuscle: async (req, res) => {
    const data = await Muscle.find();
    res.json(data);
  },
  addMuscle: async (req, res) => {
    const data = await Muscle.create({
      name: req.body.name,
      description: req.body.description,
    });
    res.json(data);
  },
  updateMuscle: async (req, res) => {
    const data = await Muscle.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
    });
    res.json(data);
  },
  deleteMuscle: async (req, res) => {
    const data = await Muscle.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
