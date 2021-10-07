const { Router } = require("express");
const router = Router();

const speciesController = require("./controllers/speciesController");
const userController = require("./controllers/userController");
const gardenController = require("./controllers/gardenController");
const searchController = require("./controllers/searchController");
const calendarEventController = require("./controllers/calendarEventController");

const jwtService = require("./services/jwtService");
const authController = require("./controllers/authController");

const { cache, flush } = require("./services/cache");

// PUBLIC ROUTES

/**
 * @route GET /search
 * @group Search
 * @summary Search among species with a query string
 * @param {string} text.query - query string (ex: tomate)
 * @returns {string} 200 - An array of matching results (species)
 * @returns {string} 500 - Internal Server Error
 */
router.get(
	"/search",
	cache,
	searchController.findByQueryString,
),
	/**
	 * @route GET /species
	 * @group Species
	 * @summary Get all species
	 * @returns {Array.<Species>} 200 - An array with all species (ordered by name)
	 * @returns {string} 500 - Internal Server Error
	 */
	router.get(
		"/species",
		cache,
		speciesController.findAll,
	);

/**
 * @route GET /speciesId
 * @group Species
 * @summary Get species with matching ID
 * @param {integer} id.required - species id (ex: 2)
 * @returns {Array.<Species>} 200 - A single species identified by its Id
 * @returns {string} 500 - Internal Server Error
 */
router.get(
	"/species/:id",
	cache,
	speciesController.findOne,
);

/**
 * @route POST /register
 * @group Authentication
 * @summary Register with email, username and password
 * @param {string} username.body.required - username of the new user
 * @param {string} email.body.required - email of the new user
 * @param {string} password.body.required - password of the new user
 * @returns {boolean} 200 - A "created" boolean at true
 * @returns {string} 400 - Bad Request Error
 * @returns {string} 500 - Internal Server Error
 */
router.post("/register", authController.register);

/**
 * @route POST /login
 * @group Authentication
 * @summary Login with email and password
 * @param {string} email.body.required - email of the new user
 * @param {string} password.body.required - password of the new user
 * @returns {json} 200 - A JSON object with a "logged" boolean at true, the username and the JWT token
 * @returns {string} 400 - Bad Request Error
 * @returns {string} 500 - Internal Server Error
 */
router.post(
	"/login",
	jwtService.redirectIfAlreadyLoggedMiddleware,
	authController.login,
);

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
 * @summary Find user using his access token (username and ID)
 * @returns {<User>} 200 - user information with all associated data (gardens, species, events, etc.)
 * @returns {string} 403 - Forbidden
 * @returns {string} 500 - Internal Server Error
 */
router.get(
	"/user",
	jwtService.verifyAndDecodeTokenMiddleware,
	cache,
	userController.findOne,
);

/**
 * @route PATCH /user
 * @group User
 * @summary Update user personal information
 * @param {string} email.body.required - user email
 * @param {string} username.body.required - user username
 * @param {string} password.body.required - user password
 * @returns {boolean} 200 - updated - true if successful
 * @returns {string} 403 - Forbidden
 * @returns {string} 500 - Internal Server Error
 */
router.patch(
	"/user",
	jwtService.verifyAndDecodeTokenMiddleware,
	flush,
	userController.save,
);

/**
 * @route GET /garden
 * @group Garden
 * @summary Find garden with matching ID belonging to current user
 * @param {integer} garden_id.params - ID of the garden
 * @returns {<Garden>} 200 - Garden object with all associations (species, events, etc.)
 */
router.get(
	"/garden/:garden_id",
	jwtService.verifyAndDecodeTokenMiddleware,
	cache,
	gardenController.findOneWithUserId,
);

/**
 * @route POST /garden
 * @group Garden
 * @summary Add a new species to a garden
 * @param {integer} garden_id.params - ID of the garden
 * @param {integer} species_id.body - ID of the new species
 * @returns {boolean} 200 - updated - true if successful
 * @returns {string} 403 - Forbidden
 * @returns {string} 500 - Internal Server Error
 */
router.post(
	"/garden/:garden_id/species",
	jwtService.verifyAndDecodeTokenMiddleware,
	flush,
	speciesController.addOneToGarden,
);

/**
 * @route DELETE /garden/:garden_id/species
 * @group Garden
 * @summary Delete species from my garden
 * @param {integer} garden_id.params.required - ID of the garden
 * @param {integer} species_id.body.required - ID of the species
 */
router.delete(
	"/garden/:garden_id/species",
	jwtService.verifyAndDecodeTokenMiddleware,
	flush,
	speciesController.removeOneFromGarden,
);

/**
 * @route POST /garden
 * @group Garden
 * @summary Create a new garden
 * @param {integer} name.body.name.required - name of the new garden
 * @param {integer} name.body.nameSlug.required - name slug of the new garden
 * @returns {boolean} 200 - created - true if successful
 * @returns {string} 403 - Forbidden
 * @returns {string} 500 - Internal Server Error
 */
router.post(
	"/garden",
	jwtService.verifyAndDecodeTokenMiddleware,
	flush,
	gardenController.createGarden,
);

/**
 * @route DELETE /garden
 * @group Garden
 * @summary Delete a garden
 * @param {integer} garden_id.params.required - ID of the garden
 * @returns {boolean} 200 - deleted - true if successful
 * @returns {string} 403 - Forbidden
 * @returns {string} 500 - Internal Server Error
 */
router.delete(
	"/garden/:garden_id",
	jwtService.verifyAndDecodeTokenMiddleware,
	flush,
	gardenController.removeGarden,
);

/**
 * @route GET /garden/:garden_id/event
 * @group CalendarEvent
 * @summary Returns the calendar events associated to a user's garden.
 * @param {integer} garden_id.params.required - ID of the garden
 * @returns {boolean} 200 - deleted - true if successful
 * @returns {string} 403 - Forbidden
 * @returns {string} 500 - Internal Server Error
 */
// router.get("/garden/:garden_id/event",
// 	jwtService.verifyAndDecodeTokenMiddleware, 
// 	calendarEventController.getCalendarEvents);



/**
 * @route POST /garden/:garden_id/event
 * @group CalendarEvent
 * @summary Create a calendar event associated to a user's garden.
 * @param {integer} garden_id.params.required - ID of the garden
 * @param {integer} species_id.body.required - ID of the species associated to the created event
 * @param {integer} name.body.required - Name of the event
 * @param {date} fromDate.body.required - Starting date of the event
 * @param {date} untilDate.body.required - End date of the event
 * @param {string} comment.body - Optional comment assigned to the event
 * @returns {boolean} 200 - deleted - true if successful
 * @returns {string} 403 - Forbidden
 * @returns {string} 500 - Internal Server Error
 */
// router.post(
// 	"/garden/:garden_id/event",
// 	jwtService.verifyAndDecodeTokenMiddleware,
// 	calendarEventController.createCalendarEvent,
// );

// PATCH /event/:id (token)
/**
 * @route PATCH /garden/:garden_id/event
 * @group CalendarEvent
 * @summary Update a calendar event associated to a user's garden.
 * @param {integer} garden_id.params.required - ID of the garden
 * @param {integer} species_id.body - ID of the species associated to the created event
 * @param {integer} name.body - Name of the event
 * @param {date} fromDate.body - Starting date of the event
 * @param {date} untilDate.body - End date of the event
 * @param {string} comment.body - Optional comment assigned to the event
 * @returns {boolean} 200 - deleted - true if successful
 * @returns {string} 403 - Forbidden
 * @returns {string} 500 - Internal Server Error
 */
// router.patch(
// 	"/garden/:garden_id/event",
// 	jwtService.verifyAndDecodeTokenMiddleware,
// 	calendarEventController.updateCalendarEvent,
// );

// DELETE /event/:id (token)
/**
 * @route PATCH /garden/:garden_id/event
 * @group CalendarEvent
 * @summary Delete a calendar event associated to a user's garden.
 * @param {integer} garden_id.params.required - ID of the garden
 * @param {integer} calendarEventId.body.required - ID of the calendar event to delete
 * @returns {boolean} 200 - deleted - true if successful
 * @returns {string} 403 - Forbidden
 * @returns {string} 500 - Internal Server Error
 */
// router.delete(
// 	"/garden/:garden_id/event",
// 	jwtService.verifyAndDecodeTokenMiddleware,
// 	calendarEventController.deleteCalendarEvent,
// );


module.exports = router;
