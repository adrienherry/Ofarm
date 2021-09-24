const db = require("../services/sequelize");
const { Garden } = require("../models");

const gardenController = {
	findOneWithUserId: async (req, res) => {
		try {
			const garden_id = parseInt(req.params.garden_id);

			if (!res.locals.id) {
				res.status(403).json({ error: "Error. User must be logged in." });
				return;
			}

			const user_id = res.locals.id;

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
		} catch (error) {}
	},

	removeGarden: async (req, res) => {
		try {
			const garden_id = req.params.garden_id;

			const garden = await Garden.findOne({
				where: {
					id: garden_id,
				},
			});

			if (!garden) {
				res.status(400).json({ error: "No garden with such id for this user" });
				return;
			}

			if (!res.locals.id) {
				res.status(403).json({ error: "Error. User must be logged in." });
				return;
			}

			if (garden.userId !== res.locals.id) {
				res.status(400).json({ error: "No garden with such id for this user" });
				return;
			}

			const nbDeleted = await garden.destroy({ returning: true });

			console.log(nbDeleted);
			if (nbDeleted.length !== 0) {
				res.status(500).json({
					error: `Delete failed: ${nbDeleted} returned !`,
				});
				return;
			}

			res.json({
				message: `Delete was successful!`,
			});

			// req.session.garden.filter(garden => garden.id != id);
			// res.redirect("/garden");
		} catch (error) {
			res.status(500).json(error.message);
		}
	},
};
module.exports = gardenController;
