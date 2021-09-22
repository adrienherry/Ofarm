const { Router } = require('express')
const router = Router();
const speciesController = require("./controllers/speciesController");
const userController = require("./controllers/userController");
const gardenController = require("./controllers/gardenController");

const { homePage } = require("./controllers/mainController");

router.get("/", homePage); 
router.get("/species", speciesController.findAll);
router.get("/species/:id", speciesController.findOne);
router.get("/user/:id", userController.findOne);
router.get("/user/:user_id/garden/:garden_id", gardenController.findOneWithUserId);

module.exports = router;