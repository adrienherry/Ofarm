const { SoilType } = require("../../models");

module.exports = {
	soilTypes: async () => {
		return await SoilType.findAll();
	},
};
