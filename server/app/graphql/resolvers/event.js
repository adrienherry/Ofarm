const { Event } = require("../../models");

module.exports = {
	events: async () => {
		return await Garden.findAll();
	},
};
