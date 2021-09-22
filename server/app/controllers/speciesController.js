const db = require("../services/sequelize");
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

	findOne: async (req, res) => {
		try {
			const id = parseInt(req.params.id);
			const speciesItem = await Species.findByPk(id, {
				include: [
					"events",
					{
						association: "events",
						include: "eventType",
					},
				],
			});
			res.json(speciesItem);
		} catch (error) {
			res.status(500).json(error.message);
		}
	},
};

module.exports = speciesController;
