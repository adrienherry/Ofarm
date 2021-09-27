const { Router } = require("express");
const router = Router();

const speciesController = require("./controllers/speciesController");
const userController = require("./controllers/userController");
const gardenController = require("./controllers/gardenController");
const searchController = require("./controllers/searchController");

const jwtService = require("./services/jwtService");
const authController = require("./controllers/authController");

// PUBLIC ROUTES

/**
 * @route GET /search
 * @group Search
 * @summary Search user or specific species
 * @returns {String} 200 - An array of auth
 * @returns {String} 500 - An error message
 */
router.get("/search", searchController.findByQueryString),


	// Find all species
/**
 * @route GET/species
 * @group Species
 * @summary Responds with species from database
 * @returns {Array<species>} 200 - An array with all species from database
 * @returns {Array<species>} 500 - An error message
 */
	router.get("/species", speciesController.findAll);
// Find species with matching ID

/**
 * @route GET / speciesId
 * @group Species
 * @summary Responds with one species from database
 * @returns {Array<species>} 200 - A single species identified by its Id
 * @returns {Array<species>} 500 - An error message
 */
router.get("/species/:id", speciesController.findOne);

/**
 * @route POST / register
 * @group Authentification
 * @summary Register himself
 * @params {string} 
 */
// Register and login
router.post("/register", authController.register);

/**
 * @route POST / login
 * @group Authentification
 * @summary Log himself
 * @params {string} 
 */
router.post("/login", authController.login);
// router.get("/logout", authController.logout);

// REGISTERED USER ROUTES

// "ME" ROUTES - REGISTERED USER WITH CORRECT USERNAME AND ID

/**
 * @route GET / user
 * @group User
 * @summary Find user with his username and Id
 * @params {id} 
 */
router.get(
	"/user",
	jwtService.verifyAndDecodeTokenMiddleware,
	userController.findOne,
); // Find user with matching ID

/**
 * @route PATCH / user
 * @group User
 * @summary Update my informations
 * @params {string} 
 */
router.patch(
	"/user",
	jwtService.verifyAndDecodeTokenMiddleware,
	userController.save,
); // Update user personal information

// Find garden with matching user ID and garden ID

/**
 * @route GET / garden
 * @group Garden
 * @summary Find my garden
 * @params {string} 
 */
router.get(
	"/garden/:garden_id",
	jwtService.verifyAndDecodeTokenMiddleware,
	gardenController.findOneWithUserId,
);

// Add a species to a garden

/**
 * @route POST / garden
 * @group Garden
 * @summary Find a species from my garden
 * @params {string} 
 */
router.post(
	"/garden/:garden_id/species",
	jwtService.verifyAndDecodeTokenMiddleware,
	speciesController.addOneToGarden,
);

// Delete a species from a garden

/**
 * @route DELETE / garden
 * @group Garden
 * @summary Delete species from my garden
 * @params {string} 
 */
router.delete(
	"/garden/:garden_id/species",
	jwtService.verifyAndDecodeTokenMiddleware,
	speciesController.removeOneFromGarden,
);

// Delete a garden

/**
 * @route DELETE / garden
 * @group Garden
 * @summary Delete a garden
 * @params {string} 
 */
router.delete(
	"/garden/:garden_id",
	jwtService.verifyAndDecodeTokenMiddleware,
	gardenController.removeGarden,
);

router.get(
	"/", 
	(_, res) => {
		res.redirect("/api-docs")
	}
);

module.exports = router;
