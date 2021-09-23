const { Router } = require("express");
const router = Router();

const speciesController = require("./controllers/speciesController");
const userController = require("./controllers/userController");
const gardenController = require("./controllers/gardenController");

const jwt = require("./services/jwtService");
const authController = require("./controllers/authController");

router.get("/species", speciesController.findAll);
router.get("/species/:id", speciesController.findOne);

// USER ROUTES
router.get("/user/:id", userController.findOne);
router.get("/user/:user_id/garden/:garden_id", gardenController.findOneWithUserId);
router.post(
	"/user/:user_id/garden/:garden_id/species",
	speciesController.addOneToGarden,
);

// AUTH ROUTES
router.post("/register", authController.register);
router.post("/login", authController.login);
// router.get("/logout", authController.logout);

module.exports = router;
