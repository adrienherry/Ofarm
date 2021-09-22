const db = require("../services/sequelize");
const { User, Garden, Species, Event, EventType } = require("../models");

const mainController = {
    homePage: async (req, res) => {
        const users = await User.findAll();
		res.json(users);
    },
};





module.exports = mainController;
