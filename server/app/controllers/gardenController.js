const db = require("../services/sequelize");
const { Op } = require("sequelize");
const { Garden } = require("../models");
const { standardErrors, slugify } = require("../helpers");

const gardenController = {
	findOneWithUserId: async (req, res) => {
		try {
			const garden_id = parseInt(req.params.garden_id);

			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
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
								attributes: {
									exclude: ["createdAt", "updatedAt", "speciesId", "eventTypeId"],
								},
							},
						],
						through: {
							attributes: [],
						},
						attributes: {
							exclude: ["createdAt", "updatedAt"],
						},
					},
				],
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			});

			if (gardenItem && user_id === gardenItem.userId) {
				res.json(gardenItem);
			} else {
				res.status(403).json(standardErrors.GardenNotFoundError);
			}
		} catch (error) {}
	},

	createGarden: async (req, res) => {
		try {
			const user_id = res.locals.id;
			const formattedName = req.body.name.trim();

			const garden = await Garden.findOne({
				where: {
					[Op.or]: [
						{
							name: {
								[Op.iLike]: `${formattedName}`,
							},
						},
						{
							nameSlug: slugify(formattedName),
						},
					],
				},
			});

			if (garden) {
				res.status(400).json(standardErrors.GardenNameAlreadyExists);
				return;
			}

			const newGarden = await Garden.create({
				name: formattedName,
				nameSlug: slugify(formattedName),
				userId: user_id,
			});

			if (!newGarden.id) {
				res.status(500).json(standardErrors.FailedCreateError);
			}

			res.json({
				id: newGarden.id,
			});
			
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
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
				res.status(400).json(standardErrors.GardenNotFoundError);
				return;
			}

			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}

			if (garden.userId !== res.locals.id) {
				res.status(400).json(standardErrors.GardenNotFoundError);
				return;
			}

			const nbDeleted = await garden.destroy({ returning: true });

			console.log(nbDeleted);
			if (nbDeleted.length !== 0) {
				res.status(500).json(standardErrors.FailedDeleteError(nbDeleted));
				return;
			}

			res.json({
				deleted: nbDeleted === 1,
			});
		} catch (error) {
			res.status(500).json(error);
		}
	},
};
module.exports = gardenController;
