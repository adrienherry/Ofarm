const { Exposition } = require("../../models");

module.exports = {
	expositions: async () => {
		return await Exposition.findAll();
	},
};
