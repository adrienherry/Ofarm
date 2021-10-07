const db = require("../services/sequelize");
const { Op, transaction } = require("sequelize");
const {
	Garden,
	Event,
	Species,
	CalendarEvent,
	EventType,
	User,
} = require("../models");
const { standardErrors, slugify } = require("../helpers");

const calendarEventController = {
	getCalendarEvents: async (req, res) => {
		try {
			const gardenId = parseInt(req.params.garden_id);

			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}

			const userId = res.locals.id;

			const calendarEvents = await CalendarEvent.findAll({
				where: {
					gardenId: gardenId,
				},
				include: [
					{
						model: Event,
						as: "baseEvent",
						include: [
							{
								model: EventType,
								as: "eventType",
								attributes: {
									exclude: ["createdAt", "updatedAt"],
								},
							},
							{
								model: Species,
								as: "species",
								attributes: {
									exclude: ["createdAt", "updatedAt"],
								},
							},
						],
						attributes: {
							exclude: ["createdAt", "updatedAt"],
						},
					},
					{
						model: Garden,
						as: "garden",
						include: [
							{
								model: User,
								as: "owner",
								attributes: ["id"],
							},
						],
					},
				],
				attributes: {
					exclude: ["createdAt", "updatedAt", "gardenId", "eventId"],
				},
			});

			if (
				!calendarEvents ||
				(calendarEvents && calendarEvents[0].garden.owner.id !== userId)
			) {
				res.status(403).json(standardErrors.GardenNotFoundError);
				return;
			} else {
				res.json(calendarEvents);
			}
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},

	createCalendarEvent: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}

			const userId = res.locals.id;

			const gardenId = req.params.garden_id;
			const { speciesId, fromDate, untilDate, name, comment } = req.body;

			if (
				!name ||
				!gardenId ||
				!speciesId ||
				!fromDate ||
				!untilDate
			) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const garden = await Garden.findOne({
				where: {
					id: gardenId,
				},
				include: [
					{
						model: User,
						as: "owner",
						attributes: {
							exclude: ["createdAt", "updatedAt"],
						},
					},
				],
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			});

			if (!garden || (garden && garden.owner.id !== userId)) {
				res.status(403).json(standardErrors.GardenNotFoundError);
				return;
			}

			const formattedName = req.body.name.trim();

			const newCalendarEvent = await CalendarEvent.create({
				name: formattedName,
				speciesId: speciesId,
				comment: comment || "",
				gardenId: gardenId,
				eventId: null,
				fromDate: fromDate,
				untilDate: untilDate,
			});

			if (!newCalendarEvent.id) {
				res.status(500).json(standardErrors.FailedCreateError);
				return;
			}

			console.log(newCalendarEvent);

			res.json(newCalendarEvent);
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	},

	updateCalendarEvent: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}

			if (!req.params.garden_id || !req.body.calendarEventId) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const userId = res.locals.id;
			const gardenId = req.params.garden_id;
			const { calendarEventId } = req.body;

			const calendarEvent = await CalendarEvent.findOne({
				where: {
					id: calendarEventId,
					gardenId: gardenId,
				},
				include: [
					{
						model: Garden,
						as: "garden",
						include: {
							model: User,
							as: "owner",
							attributes: {
								exclude: ["createdAt", "updatedAt"],
							},
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

			if (
				!calendarEvent ||
				(calendarEvent && calendarEvent.garden.owner.id !== userId)
			) {
				res.status(403).json(standardErrors.GardenNotFoundError);
				return;
			}

			const { speciesId, fromDate, untilDate, name, comment } = req.body;

			speciesId ? (calendarEvent.speciesId = speciesId) : "";
			fromDate ? (calendarEvent.fromDate = fromDate) : "";
			untilDate ? (calendarEvent.untilDate = untilDate) : "";
			name ? (calendarEvent.name = name.trim()) : "";
			comment ? (calendarEvent.comment = comment.trim()) : "";

			const result = await calendarEvent.save();

			console.log(result);

			if (!result.id) {
				res.status(500).json(standardErrors.FailedCreateError);
				return;
			}

			res.json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	},

	deleteCalendarEvent: async (req, res) => {
		try {
			const gardenId = req.params.garden_id;
			const calendarEventId = req.body.calendarEventId;

			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}

			const userId = res.locals.id;

			if (!gardenId || !calendarEventId) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const calendarEvent = await CalendarEvent.findOne({
				where: {
					id: calendarEventId,
				},
				include: [
					{
						model: Garden,
						as: "garden",
						include: [
							{
								model: User,
								as: "owner",
							},
						],
					},
				],
			});

			if (
				!calendarEvent ||
				(calendarEvent && calendarEvent.garden.owner.id !== userId)
			) {
				res.status(400).json(standardErrors.BadRequestError);
				return;
			}

			const nbDeleted = await calendarEvent.destroy({ returning: true });

			if (nbDeleted.length !== 0) {
				res.status(500).json(standardErrors.FailedDeleteError(nbDeleted));
				return;
			}

			res.json({
				deleted: nbDeleted === 0,
			});

		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	},
};
module.exports = calendarEventController;
