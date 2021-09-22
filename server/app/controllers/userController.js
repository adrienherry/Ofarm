const db = require("../database");
const { User } = require("../models");

const userController = {
    findOne: async(req, res) => {
        try {
            const userItem = await User.findById(parseInt(req.params.id));
            res.json(userItem);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = userController;