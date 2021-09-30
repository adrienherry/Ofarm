const {
	Species,
	Garden,
	SoilType,
	Exposition,
	CultureType,
	WaterNeed,
} = require("../models");

// const standardErrors = require("../helpers/s")

const speciesController = {
	findAll: async (_, res) => {
		try {
			const species = await Species.findAll({
				include: [
					{
						model: SoilType,
						as: "soil",
						attributes: ["id", "name", "nameSlug"],
						through: { attributes: [] },
					},
					{
						model: CultureType,
						as: "culture",
						attributes: ["id", "name", "nameSlug"],
						through: { attributes: [] },
					},
					{
						model: WaterNeed,
						as: "water_need",
						attributes: ["id", "name", "nameSlug", "value"],
						through: { attributes: [] },
					},
					{
						model: Exposition,
						as: "exposition",
						attributes: ["id", "name", "nameSlug", "value"],
						through: { attributes: [] },
					},
				],
				order: [["name", "ASC"]],
				attributes: { exclude: ["createdAt", "updatedAt"] },
			});
			res.json(species);
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
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
						attributes: {
							exclude: ["createdAt", "updatedAt", "eventTypeId", "speciesId"],
						},
					},
					{
						model: SoilType,
						as: "soil",
						attributes: ["id", "name", "nameSlug"],
						through: { attributes: [] },
					},
					{
						model: CultureType,
						as: "culture",
						attributes: ["id", "name", "nameSlug"],
						through: { attributes: [] },
					},
					{
						model: WaterNeed,
						as: "water_need",
						attributes: ["id", "name", "nameSlug", "value"],
						through: { attributes: [] },
					},
					{
						model: Exposition,
						as: "exposition",
						attributes: ["id", "name", "nameSlug", "value"],
						through: { attributes: [] },
					},
				],
				attributes: { exclude: ["createdAt", "updatedAt"] },
			});
			res.json(speciesItem);
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	},

	addOneToGarden: async (req, res) => {
		try {
			const garden_id = parseInt(req.params.garden_id);

			if (!res.locals.id) {
				res.status(403).json({error: "Error. User must be logged in."});
				return;
			}

			const user_id = res.locals.id;

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

			const nbUpdated = await garden.addSpecies(foundSpecies);

			if (!nbUpdated.length === 1) {
				console.log("There was a problem during delete");
				res.status(500).json({
					error: `Updated failed: ${nbUpdated.length} updated !`,
				});
				return;
			}

			res.json({
				message: `Updated ${nbUpdated.length} item successfully!`,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json(error.message);
			return;
		}
	},

	removeOneFromGarden: async (req, res) => {
		try {
			const garden_id = parseInt(req.params.garden_id);

			if (!res.locals.id) {
				res.status(403).json({ error: "Error. User must be logged in." });
				return;
			}

			const user_id = res.locals.id;

			const species_id = parseInt(req.body.speciesId);

			let garden = await Garden.findOne({
				where: {
					id: garden_id,
					userId: user_id,
				},
				include: ["species"],
			});

			if (!garden) {
				res.status(403).json({ error: "No garden with such id for this user" });
				return;
			}

			const foundSpecies = await garden.getSpecies({
				where: { id: species_id },
			});

			if (!foundSpecies[0]) {
				res.status(403).json({
					error: "Garden does not contains this species.",
				});
				return;
			}

			const nbDeleted = await garden.removeSpecies(foundSpecies[0]);

			if (nbDeleted != 1) {
				res.status(500).json({
					error: `Delete failed: ${nbDeleted} deleted !`,
				});
				return;
			}

			res.json({
				message: `Deleted ${nbDeleted} item successfully!`,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json(error.message);
			return;
		}
	},
};
module.exports = speciesController;
