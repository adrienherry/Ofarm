const { Species, Garden } = require("../models");
const { Op, fn, col, where } = require("sequelize");

const searchController = {
	findByQueryString: async (req, res) => {
		try {
			const text = req.query.text
				? req.query.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
				: "";
			console.log(text);
			const species = await Species.findAll({
				where: where(fn("unaccent", col("name")), {
					[Op.iLike]: `${text.toLowerCase()}%`,
				}),
				order: [["name", "ASC"]],
			});
			res.json(species);
		} catch (error) {
			res.status(500).json(error);
		}
	},
};
module.exports = searchController;
