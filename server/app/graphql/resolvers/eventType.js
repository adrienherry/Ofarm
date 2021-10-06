const { EventType } = require("../../models");

module.exports = {
	eventTypes: async () => {
		return await EventType.findAll();
	},
};
