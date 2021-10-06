const { CultureType } = require("../../models");

module.exports = {
	cultureTypes: async () => {
		return await CultureType.findAll();
	},
};
