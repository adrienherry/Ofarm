const models = require("../../models");

const Species = {
	species: async () => {
		const species = await models.Species.findAll({
			include: [
				"events",
				{
					association: "events",
                    include: "eventType",
				},
			],
		});

		return species;
	},
};

module.exports = Species;
