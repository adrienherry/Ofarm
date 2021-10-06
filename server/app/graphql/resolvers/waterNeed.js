const { WaterNeed } = require("../../models");

module.exports = {
	waterNeeds: async () => {
		return await WaterNeed.findAll();
	},
};
