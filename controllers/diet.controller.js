const Diet = require("../models/Diet.model");

module.exports.diet = {
  getDiet: async (req, res) => {
    const data = await Diet.find().populate('product');
    res.json(data);
  },
  addDiet: async (req, res) => {
    const data = await Diet.create({
      name: req.body.name,
      description: req.body.description,
      product: req.body.product,
      image: req.body.image
    });
    res.json(data);
  },
  updateDiet: async (req, res) => {
    const data = await Diet.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      product: req.body.product,
      image: req.body.image
    });
    res.json(data);
  },
  deleteDiet: async (req, res) => {
    const data = await Diet.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
