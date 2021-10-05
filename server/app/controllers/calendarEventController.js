const db = require("../services/sequelize");
const { Op, transaction } = require("sequelize");
const {
	Garden,
	Event,
	Species,
	CalendarEvent,
	EventType,
} = require("../models");
const { standardErrors, slugify } = require("../helpers");

const eventController = {
	getCalendarEvents: async (req, res) => {
		try {
			const garden_id = parseInt(req.params.garden_id);

			// if (!res.locals.id) {
			// 	res.status(403).json(standardErrors.UserNotLoggedError);
			// 	return;
			// }

			const user_id = 1; //res.locals.id;

			const calendarEvents = await CalendarEvent.findAll({
				where: {
					garden_id: garden_id,
				},
				include: [{
					model : Event,
					as: "baseEvent",
					association: "",
					include: [{
						model: EventType,
						as: "eventType",
						attributes: {
						exclude: ["createdAt", "updatedAt"]
					}
					}],
					attributes: {
						exclude: ["createdAt", "updatedAt", "speciesId", "eventTypeId"]
					}
				}
				// 	{
				// 		association: "events",
				// 		include: [
				// 			{
				// 				model: Event,
				// 				as: "event",
				// 				// attributes: {
				// 				// 	exclude: [
				// 				// 		"createdAt",
				// 				// 		"updatedAt",
				// 				// 		"speciesId",
				// 				// 		"eventTypeId",
				// 				// 	],
				// 				// },
				// 			},
				// 			{
				// 				model: Species,
				// 				as: "species"
				// 				// attributes: {
				// 				// 	exclude: [
				// 				// 		"createdAt",
				// 				// 		"updatedAt",
				// 				// 		"speciesId",
				// 				// 		"eventTypeId",
				// 				// 	],
				// 				// },
				// 			},
				// 		],
				// 		through: {
				// 			attributes: [],
				// 		},
				// 		attributes: {
				// 			exclude: ["createdAt", "updatedAt"],
				// 		},
				// 	},
				],
				attributes: {
					exclude: ["createdAt", "updatedAt", "gardenId", "eventId"],
				},
			});

			if (calendarEvents) {
				res.json(calendarEvents);
			} else {
				res.status(403).json(standardErrors.GardenNotFoundError);
			}
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},

	// createGarden: async (req, res) => {
	// 	try {
	// 		const user_id = res.locals.id;
	// 		const formattedName = req.body.name.trim();

	// 		const garden = await Garden.findOne({
	// 			where: {
	// 				[Op.or]: [
	// 					{
	// 						name: {
	// 							[Op.iLike]: `${formattedName}`,
	// 						},
	// 					},
	// 					{
	// 						nameSlug: slugify(formattedName),
	// 					},
	// 				],
	// 			},
	// 		});

	// 		if (garden) {
	// 			res.status(400).json(standardErrors.GardenNameAlreadyExists);
	// 			return;
	// 		}

	// 		// console.log(speciesIds);
	// 		const newGarden = await Garden.create({
	// 			name: formattedName,
	// 			nameSlug: slugify(formattedName),
	// 			userId: user_id,
	// 		});

	// 		if (!newGarden.id) {
	// 			res.status(500).json(standardErrors.FailedCreateError);
	// 		}

	// 		const gardenSpecies = req.body.species.map(({ id }) => {
	// 			return new Species({ id: id });
	// 		});

	// 		await newGarden.setSpecies(gardenSpecies);

	// 		// await newGarden.save();

	// 		// Add species to new garden here

	// 		res.json({
	// 			id: newGarden.id,
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 		res.status(500).json(error);
	// 	}
	// },

	// removeGarden: async (req, res) => {
	// 	try {
	// 		const garden_id = req.params.garden_id;

	// 		const garden = await Garden.findOne({
	// 			where: {
	// 				id: garden_id,
	// 			},
	// 		});

	// 		if (!garden) {
	// 			res.status(400).json(standardErrors.GardenNotFoundError);
	// 			return;
	// 		}

	// 		if (!res.locals.id) {
	// 			res.status(403).json(standardErrors.UserNotLoggedError);
	// 			return;
	// 		}

	// 		if (garden.userId !== res.locals.id) {
	// 			res.status(400).json(standardErrors.GardenNotFoundError);
	// 			return;
	// 		}

	// 		const nbDeleted = await garden.destroy({ returning: true });

	// 		console.log(nbDeleted);
	// 		if (nbDeleted.length !== 0) {
	// 			res.status(500).json(standardErrors.FailedDeleteError(nbDeleted));
	// 			return;
	// 		}

	// 		res.json({
	// 			deleted: nbDeleted === 1,
	// 		});
	// 	} catch (error) {
	// 		res.status(500).json(error);
	// 	}
	// },
};
module.exports = eventController;
