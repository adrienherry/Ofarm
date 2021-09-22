const db = require("../database");
const { Species } = require("../models");

const speciesController = {
    findAll: async (_, res) => {
        try {
            const species = await Species.findAll();
            res.json(species);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },

    findOne: async(req, res) => {
        try {
        const speciesItem = await Species.findById(parseInt(req.params.id));
        res.json(speciesItem);
    } catch (error) {
        res.status(500).json(error.message)
    }
},
}

module.exports = speciesController;