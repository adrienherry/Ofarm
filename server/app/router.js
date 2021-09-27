const { Router } = require("express");
const router = Router();

const speciesController = require("./controllers/speciesController");
const userController = require("./controllers/userController");
const gardenController = require("./controllers/gardenController");
const searchController = require("./controllers/searchController");

const jwtService = require("./services/jwtService");
const authController = require("./controllers/authController");

// PUBLIC ROUTES

router.get("/search", searchController.findByQueryString),
	// Find all species
	router.get("/species", speciesController.findAll);
// Find species with matching ID
router.get("/species/:id", speciesController.findOne);
// Register and login
router.post("/register", authController.register);
router.post("/login", authController.login);
// router.get("/logout", authController.logout);

// REGISTERED USER ROUTES

// "ME" ROUTES - REGISTERED USER WITH CORRECT USERNAME AND ID

router.get(
	"/user",
	jwtService.verifyAndDecodeTokenMiddleware,
	userController.findOne,
); // Find user with matching ID
router.patch(
	"/user",
	jwtService.verifyAndDecodeTokenMiddleware,
	userController.save,
); // Update user personal information

// Find garden with matching user ID and garden ID
router.get(
	"/garden/:garden_id",
	jwtService.verifyAndDecodeTokenMiddleware,
	gardenController.findOneWithUserId,
);

// Add a species to a garden
router.post(
	"/garden/:garden_id/species",
	jwtService.verifyAndDecodeTokenMiddleware,
	speciesController.addOneToGarden,
);

// Delete a species from a garden
router.delete(
	"/garden/:garden_id/species",
	jwtService.verifyAndDecodeTokenMiddleware,
	speciesController.removeOneFromGarden,
);

// Delete a garden
router.delete(
	"/garden/:garden_id",
	jwtService.verifyAndDecodeTokenMiddleware,
	gardenController.removeGarden,
);

module.exports = router;
