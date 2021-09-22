const db = require("../services/sequelize");
const { Garden, EventType } = require("../models");

const gardenController = {
	findOneWithUserId: async (req, res) => {
		try {
			const garden_id = parseInt(req.params.garden_id);
			const user_id = parseInt(req.params.user_id);

			const gardenItem = await Garden.findByPk(garden_id, {
				include: [
					"species",
					{
						association: "species",
						include: [
							"events",
							{
								association: "events",
								include: "eventType",
							},
						],
						through: {
							attributes: [],
						},
					},
				],
            });
            
			if (gardenItem && user_id === gardenItem.userId) {
				res.json(gardenItem);
			} else {
				res.status(403).json({ error: "No garden with such id for this user" });
            }
            
		} catch (error) {
			res.status(500).json(error.message);
		}
	},
};
module.exports = gardenController;
