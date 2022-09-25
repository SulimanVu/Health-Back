const Work = require('../models/Work.model');

module.exports.workController = {
    addWork: async (req, res) => {
        const { image, name, description } = req.body;
        try {
            const data = await Work.create({
                image,
                name,
                description
            });
            res.json(data)
        } catch (error) {
            res.json(error);
        }
    },

    getWork: async (req, res) => {
        try {
            const data = await Work.find();
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    }
}