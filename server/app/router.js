const { Router } = require("express");
const router = Router();

const speciesController = require("./controllers/speciesController");
const userController = require("./controllers/userController");
const gardenController = require("./controllers/gardenController");
const searchController = require("./controllers/searchController");
const calendarEventController = require("./controllers/calendarEventController");

const harvestController = require("./controllers/harvestController");
const fieldController = require("./controllers/fieldController.js");

const jwtService = require("./services/jwtService");
const authController = require("./controllers/authController");

const { cache, flush } = require("./services/cache");

// PUBLIC ROUTES

/**
 * @route GET /search
 * @group Search
 * @summary Search among species with a query string. Public route.
 * @param {string} text.query - query string - eg: tomate.
 * @returns {Array.<Species>} 200 - An array of matching results (among species) ordered by name.
 * @returns {string} 500 - Internal Server Error.
 */
router.get("/search", cache, searchController.findByQueryString);

/**
 * @route GET /species
 * @group Species
 * @summary Get all species. Public route.
 * @returns {Array.<Species>} 200 - An array with all species (ordered by name).
 * @returns {string} 500 - Internal Server Error.
 */
router.get("/species", cache, speciesController.findAll);

/**
 * @route GET /speciesId
 * @group Species
 * @summary Get species with matching ID. Public route.
 * @param {integer} id.required - species id (ex: 2).
 * @returns {Array.<Species>} 200 - A single species matching the given ID.
 * @returns {string} 500 - Internal Server Error.
 */
router.get("/species/:id", cache, speciesController.findOne);

/**
 * @route POST /register
 * @group Authentication
 * @summary Register with email, username and password. Public route.
 * @param {string} username.body.required - username of the new user.
 * @param {string} email.body.required - email of the new user.
 * @param {string} password.body.required - password of the new user.
 * @returns {boolean} 200 - A "created" boolean at true.
 * @returns {string} 400 - Bad Request Error.
 * @returns {string} 500 - Internal Server Error.
 */
router.post("/register", authController.register);

/**
 * @route POST /login
 * @group Authentication
 * @summary Login with email and password. Public route.
 * @param {string} email.body.required - email of the new user.
 * @param {string} password.body.required - password of the new user.
 * @returns {json} 200 - A JSON object with a "logged" boolean at true, the username, the username slug, the email address and the JWT token.
 * @returns {string} 400 - Bad Request Error.
 * @returns {string} 500 - Internal Server Error.
 */
router.post(
	"/login",
	jwtService.redirectIfAlreadyLoggedMiddleware,
	authController.login,
);

/**
 * @route POST /logout
 * @group Authentication
 * @summary Logout. Only accessible to logged users.
 * @returns {json} 200 - A JSON object with a redirect boolean at true.
 * @returns {string} 400 - Bad Request Error.
 * @returns {string} 500 - Internal Server Error.
 */
router.get(
	"/logout",
	jwtService.verifyAndDecodeTokenMiddleware,
	authController.logout,
);

// REGISTERED USER ROUTES

// "ME" ROUTES - REGISTERED USER WITH CORRECT USERNAME AND ID

/**
 * @route GET /user
 * @group User
 * @summary Find user using his access token (username and ID). Only accessible to logged users.
 * @returns {<User>} 200 - user information with all associated data (gardens, species, events, event type).
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.get(
	"/user",
	jwtService.verifyAndDecodeTokenMiddleware,
	userController.findOne,
);

/**
 * @route PATCH /user
 * @group User
 * @summary Update user personal information with at least one of the following parameters. Only accessible to logged users.
 * @param {string} email.body.required - user email.
 * @param {string} username.body.required - user username.
 * @param {string} password.body.required - user password.
 * @returns {boolean} 200 - updated - true if successful.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.patch(
	"/user",
	jwtService.verifyAndDecodeTokenMiddleware,
	userController.save,
);

/**
 * @route GET /garden/:garden_id
 * @group Garden
 * @summary Find garden with matching ID belonging to current user. Only accessible to logged users.
 * @param {integer} garden_id.params - ID of the garden.
 * @returns {<Garden>} 200 - Garden object with all associations (species, events, etc.).
 */
router.get(
	"/garden/:garden_id",
	jwtService.verifyAndDecodeTokenMiddleware,
	gardenController.findOneWithUserId,
);

/**
 * @route POST /garden/:garden_id/species
 * @group Garden
 * @summary Add a new species to a garden. Only accessible to logged users.
 * @param {integer} garden_id.params.required - ID of the garden.
 * @param {integer} speciesId.body.required - ID of the new species.
 * @returns {boolean} 200 - updated (true if successful).
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.post(
	"/garden/:garden_id/species",
	jwtService.verifyAndDecodeTokenMiddleware,
	speciesController.addOneToGarden,
);

/**
 * @route DELETE /garden/:garden_id/species
 * @group Garden
 * @summary Delete species from my garden.
 * @param {integer} garden_id.params.required - ID of the garden.
 * @param {integer} speciesId.body.required - ID of the species.
 * @returns {integer} deleted - number of deleted items.
 */
router.delete(
	"/garden/:garden_id/species",
	jwtService.verifyAndDecodeTokenMiddleware,
	speciesController.removeOneFromGarden,
);

/**
 * @route POST /garden
 * @group Garden
 * @summary Create a new garden. Only accessible to logged users.
 * @param {integer} name.body.name.required - name of the new garden.
 * @param {integer} name.body.nameSlug.required - name slug of the new garden.
 * @returns {object} 200 - an object containing the ID, name and slug ot the newly created garden.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.post(
	"/garden",
	jwtService.verifyAndDecodeTokenMiddleware,
	gardenController.createGarden,
);

/**
 * @route DELETE /garden/:garden_id
 * @group Garden
 * @summary Delete a garden. Only accessible to logged users.
 * @param {integer} garden_id.params.required - ID of the garden.
 * @returns {boolean} 200 - deleted - true if successful.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.delete(
	"/garden/:garden_id",
	jwtService.verifyAndDecodeTokenMiddleware,
	gardenController.removeGarden,
);

/**
 * @route GET /garden/:garden_id/event
 * @group CalendarEvent
 * @summary Returns the calendar events associated to a user's garden. Only accessible to logged users.
 * @param {integer} garden_id.params.required - ID of the garden.
 * @returns {Array.<CalendarEvent>} 200 - an array of calendar events belonging to the garden and user.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
// router.get("/garden/:garden_id/event",
// 	jwtService.verifyAndDecodeTokenMiddleware,
// 	calendarEventController.getCalendarEvents);

/**
 * @route POST /garden/:garden_id/event
 * @group CalendarEvent
 * @summary Create a calendar event associated to a user's garden. Only accessible to logged users.
 * @param {integer} garden_id.params.required - ID of the garden.
 * @param {integer} speciesId.body.required - ID of the species associated to the created event.
 * @param {integer} name.body.required - Name of the event.
 * @param {date} fromDate.body.required - Starting date of the event.
 * @param {date} untilDate.body.required - End date of the event.
 * @param {string} comment.body - Optional comment assigned to the event.
 * @returns {<CalendarEvent>} 200 - the newly created calendar event.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
// router.post(
// 	"/garden/:garden_id/event",
// 	jwtService.verifyAndDecodeTokenMiddleware,
// 	calendarEventController.createCalendarEvent,
// );

/**
 * @route PATCH /garden/:garden_id/event
 * @group CalendarEvent
 * @summary Update a calendar event associated to a user's garden with at least one of the parameters below. Only accessible to logged users.
 * @param {integer} garden_id.params.required - ID of the garden.
 * @param {integer} speciesId.body.required - ID of the species associated to the created event.
 * @param {integer} name.body.required - Name of the event.
 * @param {date} fromDate.body.required - Starting date of the event.
 * @param {date} untilDate.body.required - End date of the event.
 * @param {string} comment.body - Optional comment assigned to the event.
 * @returns {boolean} 200 - updated - true if successful.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
// router.patch(
// 	"/garden/:garden_id/event",
// 	jwtService.verifyAndDecodeTokenMiddleware,
// 	calendarEventController.updateCalendarEvent,
// );

// DELETE /event/:id (token)
/**
 * @route DELETE /garden/:garden_id/event
 * @group CalendarEvent
 * @summary Delete a calendar event associated to a user's garden. Only accessible to logged users.
 * @param {integer} garden_id.params.required - ID of the garden.
 * @param {integer} calendarEventId.body.required - ID of the calendar event to delete.
 * @returns {boolean} 200 - deleted - true if successful.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
// router.delete(
// 	"/garden/:garden_id/event",
// 	jwtService.verifyAndDecodeTokenMiddleware,
// 	calendarEventController.deleteCalendarEvent,
// );

/**
 * @route GET /harvest
 * @group Harvest
 * @summary Returns all the harvests of a given user. Only accessible to logged users.
 * @returns {Array.<Harvest>} 200 - an array of harvests.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.get(
	"/harvest",
	jwtService.verifyAndDecodeTokenMiddleware,
	harvestController.getHarvests,
);

/**
 * @route GET /garden/:garden_id/harvest
 * @group Harvest
 * @summary Returns all the harvests of the user's garden matching the given ID. Only accessible to logged users.
 * @returns {Array.<Harvest>} 200 - an array of harvests.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.get(
	"/garden/:garden_id/harvest",
	jwtService.verifyAndDecodeTokenMiddleware,
	harvestController.getHarvestByGardenId,
);

/**
 * @route POST /harvest
 * @group Harvest
 * @summary Creates a new harvest. Only accessible to logged users.
 * @param {integer} gardenId.body.required - ID of the garden.
 * @param {integer} speciesId.body.required - ID of the species.
 * @param {string} comment.body - optional comment associated to the calendar Event.
 * @param {number} quantity.body.required - harvest quantity in kilogram (double precision).
 * @param {string} date.body.required - date the harvest was performed.
 * @returns {<Harvest>} 200 - the created harvest.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.post(
	"/harvest",
	jwtService.verifyAndDecodeTokenMiddleware,
	harvestController.createHarvest,
);

// router.patch("/harvest");
/**
 * @route PATCH /harvest
 * @group Harvest
 * @summary Changes a harvest's name, date, quantity, comment, and/or species. Only accessible to logged users.
 * @param {integer} gardenId.body.required - ID of the garden.
 * @param {integer} speciesId.body.required - ID of the species.
 * @param {string} name.body.required - name of the event.
 * @param {string} comment.body - optional comment associated to the calendar Event.
 * @param {number} quantity.body.required - harvest quantity in kilogram (double precision).
 * @param {string} date.body.required - date the harvest was performed.
 * @returns {boolean} 200 - updated - true if successful.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.patch(
	"/harvest",
	jwtService.verifyAndDecodeTokenMiddleware,
	harvestController.updateHarvest,
);

/**
 * @route DELETE /harvest/
 * @group Harvest
 * @summary Deletes a harvest. Only accessible to logged users.
 * @param {integer} gardenId.body.required - ID of the garden.
 * @returns {boolean} 200 - deleted - true if successful.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.delete(
	"/harvest",
	jwtService.verifyAndDecodeTokenMiddleware,
	harvestController.deleteHarvest,
);

/**
 * @route GET /garden/:garden_id/field
 * @group Garden
 * @summary Returns all fields associated to a user's garden. Only accessible to logged users.
 * @param {integer} garden_id.params.required - ID of the garden.
 * @returns {Array.<Field>} 200 - All the fields of a user's garden.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.get(
	"/garden/:garden_id/field",
	jwtService.verifyAndDecodeTokenMiddleware,
	fieldController.findGardenFields,
);

/**
 * @route POST /garden/:garden_id/field
 * @group Field
 * @summary Creates a new field in a garden.
 * @param {integer} gardenId.params.required - ID of the garden.
 * @param {Array.integer} speciesIds.body - optional array of the species to transfer from the garden to the field, or to directly add to the field.
 * @param {object} shape.body.required - polygon object - eg:[{"lat": lat1, "lng": lng1}, {...}, {"lat":latN, "lng":lngN}].
 * @returns {Field} 200 - the created field.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.post(
	"/garden/:garden_id/field",
	jwtService.verifyAndDecodeTokenMiddleware,
	fieldController.addFieldToGarden,
);

/**
 * @route PATCH /garden/:garden_id/field
 * @group Field
 * @summary Update a field belonging to a garden.
 * @param {integer} gardenId.params.required - ID of the garden.
 * @param {integer} fieldId.body.required - ID of the field to modify.
 * @param {Array.integer} speciesIds.body - optional array of the species to transfer from the garden to the field, or to directly add to the field.
 * @param {object} shape.body.required - polygon object - eg:[{"lat": lat1, "lng": lng1}, {...}, {"lat":latN, "lng":lngN}].
 * @returns {boolean} 200 - updated - true if successful.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.patch(
	"/garden/:garden_id/field",
	jwtService.verifyAndDecodeTokenMiddleware,
	fieldController.updateField,
);

/**
 * @route DELETE /garden/:garden_id/field
 * @group Field
 * @summary Delete a field belonging to a garden. Only accessible to logged users.
 * @param {integer} gardenId.params.required - ID of the garden.
 * @param {integer} fieldId.body.required - ID of the field to modify.
 * @returns {boolean} 200 - deleted - true if successful.
 * @returns {string} 403 - Forbidden.
 * @returns {string} 500 - Internal Server Error.
 */
router.delete(
	"/garden/:garden_id/field/",
	jwtService.verifyAndDecodeTokenMiddleware,
	fieldController.removeFieldFromGarden,
);

module.exports = router;
