const { Garden, User, Field, Species } = require("../models");
const { standardErrors } = require("../helpers");

const fieldController = {
	findGardenFields: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}

			const gardenId = req.params.garden_id;

			const garden = await Field.findAll({
				where: {
					gardenId: gardenId,
				},
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			});

			res.json(garden);
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	},

	addFieldToGarden: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}

			if (!req.body.shape || req.body.shape.length <= 2) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const userId = res.locals.id;
			const gardenId = req.params.garden_id;
			const { shape, speciesIds } = req.body;

			const garden = await Garden.findOne({
				where: {
					id: gardenId,
					userId: userId,
				},
				include: {
					model: Species,
					as: "species",
				},
			});

			if (!garden) {
				res.status(403).json(standardErrors.GardenNotFoundError);
			}

			const polygon = {
				type: "POLYGON",
				coordinates: [shape.map((item) => [item.lng, item.lat])],
			};

			const newField = await Field.create({
				shape: polygon,
				gardenId: gardenId,
			});

			await newField.addSpecies(speciesIds);

			res.json(newField);
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	},

	updateField: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}

			if (!req.body.fieldId) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const field = await Field.findOne({
				where: {
					id: req.body.fieldId,
					gardenId: req.params.garden_id,
					"$garden.user_id$": res.locals.id,
				},
				include: {
					model: Garden,
					required: true,
					as: "garden",
				},
			});

			if (!field) {
				res.status(403).json(standardErrors.FieldNotFoundError);
				return;
			}

			const { shape, speciesIds } = req.body;

			if (shape && shape.length >= 3) {
				const polygon = {
					type: "POLYGON",
					coordinates: [shape.map((item) => [item.lng, item.lat])],
				};

				field.shape = polygon;
			}

			speciesIds ? await field.setSpecies(speciesIds) : "";

			const result = await field.save();

			if (!result.id) {
				res.status(500).json(standardErrors.FailedCreateError);
				return;
			}

			res.json({ updated: true });
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	},

	removeFieldFromGarden: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}

			if (!req.body.fieldId) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const field = await Field.findOne({
				where: {
					id: req.body.fieldId,
					gardenId: req.params.garden_id,
					"$garden.user_id$": res.locals.id,
				},
				include: {
					model: Garden,
					required: true,
					as: "garden",
				},
			});

			if (!field) {
				res.status(403).json(standardErrors.FieldNotFoundError);
				return;
			}

			const nbDeleted = await field.destroy({ returning: true });

			if (nbDeleted.length !== 0) {
				res.status(500).json(standardErrors.FailedDeleteError(nbDeleted));
				return;
			}

			res.json({
				deleted: nbDeleted.length === 0,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	},
};

module.exports = fieldController;
