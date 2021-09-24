const db = require("../services/sequelize");
const { col, Op } = require("sequelize");
const { Species, Garden } = require("../models");

const speciesController = {
	findAll: async (_, res) => {
		try {
			const species = await Species.findAll();
			res.json(species);
		} catch (error) {
			res.status(500).json(error.message);
		}
	},

	findOne: async (req, res) => {
		try {
			const id = parseInt(req.params.id);
			const speciesItem = await Species.findByPk(id, {
				include: [
					"events",
					{
						association: "events",
						include: "eventType",
					},
				],
			});
			res.json(speciesItem);
		} catch (error) {
			res.status(500).json(error.message);
		}
	},

	addOneToGarden: async (req, res) => {
		try {
			const garden_id = parseInt(req.params.garden_id);
			const user_id = parseInt(req.params.user_id);
			const species_id = parseInt(req.body.speciesId);

			let garden = await Garden.findOne({
				where: {
					id: garden_id,
					userId: user_id,
				},
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

			if (!garden) {
				res.status(403).json({ error: "No garden with such id for this user" });
				return;
			}

			const alreadyPresent = garden.species.find(
				(item) => item.id === species_id,
			);

			if (alreadyPresent) {
				res.status(403).json({
					error:
						"Garden already contains this species. Please choose another species.",
				});
				return;
			}

			const foundSpecies = await Species.findByPk(species_id, {});
			if (!foundSpecies) {
				res
					.status(403)
					.json({ error: "The specified species does not exist." });
				return;
			}

			console.log(garden.species); // 2 espèces

			// Ici j'ai tenté update(), save(), reload(), addSpecies(), setSpecies(), etc.
			garden.species.push(foundSpecies); // => update l'instance
			garden.addSpecies(foundSpecies); // => update la BD (après save()) mais pas l'instance
			console.log(garden.species);

			await garden.save();

			res.json({message: "Updated successfully!"})

		} catch (error) {
			console.log(error);
			res.status(500).json(error.message);
			return;
		}
	},
};

module.exports = speciesController;
