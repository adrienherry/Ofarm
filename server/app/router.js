const { Router } = require('express')
const router = Router();

const { homePage } = require("./controllers/mainController");

router.get("/", homePage); 

module.exports = router;