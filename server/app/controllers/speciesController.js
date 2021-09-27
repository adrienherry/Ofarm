const { Species, Garden } = require("../models");
const { standardErrors } = require("../helpers");

const speciesController = {
	findAll: async (_, res) => {
		try {
			const species = await Species.findAll({
				order: [["name", "ASC"]],
			});
			res.json(species);
		} catch (error) {
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
					},
				],
			});
			res.json(speciesItem);
		} catch (error) {
			res.status(500).json(error);
		}
	},

	addOneToGarden: async (req, res) => {
		try {
			const garden_id = parseInt(req.params.garden_id);

			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
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
				res.status(403).json(standardErrors.GardenNotFoundError);
				return;
			}

			const alreadyPresent = garden.species.find(
				(item) => item.id === species_id,
			);

			if (alreadyPresent) {
				res.status(403).json(standardErrors.SpeciesAlreadyExistsInGardenError);
				return;
			}

			const foundSpecies = await Species.findByPk(species_id, {});
			if (!foundSpecies) {
				res
					.status(403)
					.json(standardErrors.SpeciesDoesNotExistError);
				return;
			}

			const nbUpdated = await garden.addSpecies(foundSpecies);

			if (!nbUpdated.length === 1) {
				res.status(500).json(standardErrors.FailedUpdateError(nbUpdated.length));
				return;
			}

			res.json({
				updated: nbUpdated.length,
			});
		} catch (error) {
			res.status(500).json(error);
			return;
		}
	},

	removeOneFromGarden: async (req, res) => {
		try {
			const garden_id = parseInt(req.params.garden_id);

			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
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
				res.status(403).json(standardErrors.GardenNotFoundError);
				return;
			}

			const foundSpecies = await garden.getSpecies({
				where: { id: species_id },
			});

			if (!foundSpecies[0]) {
				res.status(403).json(standardErrors.SpeciesNotInGardenError);
				return;
			}

			const nbDeleted = await garden.removeSpecies(foundSpecies[0]);

			if (nbDeleted != 1) {
				res.status(500).json(standardErrors.FailedDeleteError(nbDeleted));
				return;
			}

			res.json({
				deleted: nbDeleted,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
			return;
		}
	},
};
module.exports = speciesController;
