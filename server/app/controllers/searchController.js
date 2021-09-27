const { Species, Garden } = require("../models");
const { Op } = require("sequelize");

const searchController = {
	findByQueryString: async (req, res) => {
		try {
			const { text } = req.query ? req.query : "";
			console.log(req.query);
			const species = await Species.findAll({
				where: {
					name: {
						[Op.iLike]: `%${text.toLowerCase()}%`,
					},
				},
				order: [["name", "ASC"]],
			});
			res.json(species);
		} catch (error) {
			res.status(500).json(error.message);
		}
	},
};
module.exports = searchController;
