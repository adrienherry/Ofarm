const { Harvest, Garden, Species } = require("../models");
const { standardErrors, validate } = require("../helpers");
const { where, col, Op } = require("sequelize");

const harvestController = {
	getHarvests: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}
			const userId = res.locals.id;

			const harvests = await Harvest.findAll({
				where: {
					"$garden.user_id$": userId,
				},
				include: {
					model: Garden,
					required: true,
					as: "garden",
				},
			});
			res.json(harvests);
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},

	getHarvestByGardenId: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}
			const userId = res.locals.id;

			if (!validate.isValidAsInt(req.params.garden_id)) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}
			const garden_id = parseInt(req.params.garden_id);

			const harvests = await Harvest.findAll({
				where: {
					gardenId: garden_id,
					"$garden.user_id$": userId,
				},
				include: [
					{
						model: Garden,
						required: true,
						as: "garden",
					},
					{ model: Species, as: "species" },
				],
				order: [["date", "DESC"]],
			});
			res.json(harvests);
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},

	createHarvest: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}
			const userId = res.locals.id;

			if (
				!validate.isValidAsInt(req.body.speciesId) ||
				!validate.isValidAsInt(req.body.gardenId)
			) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const { speciesId, gardenId, quantity, date } = req.body;

			if (!speciesId || !gardenId || !quantity || !date) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const garden = await Garden.findOne({
				where: {
					id: gardenId,
					userId: userId,
				},
				include: "species",
			});

			if (!garden) {
				res.status(403).json(standardErrors.GardenNotFoundError);
			}

			if (
				!garden.species ||
				!garden.species.find((item) => item.id === speciesId)
			) {
				// Species not found in garden
				res.status(403).json(standardErrors.SpeciesNotInGardenError);
			}

			const newHarvest = await Harvest.create({
				speciesId: speciesId,
				gardenId: gardenId,
				quantity: quantity,
				date: date,
				comment: req.body.comment ? req.body.comment.trim() : "",
			});

			if (!newHarvest.id) {
				res.status(500).json(standardErrors.InternalServerError);
				return;
			}

			res.json(newHarvest);
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},

	updateHarvest: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}
			const userId = res.locals.id;

			if (!req.body.harvestId) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			if (!validate.isValidAsInt(req.body.harvestId)) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const harvestId = parseInt(req.body.harvestId);

			const harvest = await Harvest.findOne({
				where: {
					id: harvestId,
					"$garden.user_id$": userId,
				},
				include: {
					model: Garden,
					as: "garden",
					required: true,
				},
			});

			if (!harvest) {
				res.status(403).json(standardErrors.HarvestNotFoundError);
			}

			const { comment, date, quantity, gardenId, speciesId } = req.body;

			quantity ? (harvest.quantity = quantity) : "";
			date ? (harvest.date = date) : "";
			speciesId ? (harvest.speciesId = speciesId) : "";
			comment ? (harvest.comment = comment.trim()) : "";
			gardenId ? (harvest.gardenId = gardenId) : "";

			const result = await harvest.save();

			if (!result.id) {
				res.status(500).json(standardErrors.FailedCreateError);
				return;
			}

			res.json({ updated: true });
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},

	deleteHarvest: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}
			const userId = res.locals.id;

			if (!req.body.id) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			if (!validate.isValidAsInt(req.body.harvestId)) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const harvestId = parseInt(req.body.harvestId);

			const garden = await Harvest.findOne({
				where: {
					id: harvestId,
					"$garden.user_id$": userId,
				},
				include: {
					model: Garden,
					as: "garden",
					required: true,
				},
			});

			if (!garden) {
				res.status(400).json(standardErrors.GardenNotFoundError);
				return;
			}

			const nbDeleted = await garden.destroy({ returning: true });

			if (nbDeleted.length !== 0) {
				res.status(500).json(standardErrors.FailedDeleteError(nbDeleted));
				return;
			}

			res.json({
				deleted: nbDeleted.length === 0,
			});
		} catch (error) {
			res.status(500).json(standardErrors.InternalServerError);
		}
	},
};

module.exports = harvestController;
