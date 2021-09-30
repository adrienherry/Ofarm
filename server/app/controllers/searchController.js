const { Species, Garden } = require("../models");
const { Op } = require("sequelize");

const searchController = {
	findByQueryString: async (req, res) => {
		try {
			const text = req.query.text ? req.query.text : "";
			const species = await Species.findAll({
				where: {
					name: {
						[Op.iLike]: `${text.toLowerCase()}%`,
					},
				},
				order: [["name", "ASC"]],
			});
			res.json(species);
		} catch (error) {
			res.status(500).json(error);
		}
	},
};
module.exports = searchController;
