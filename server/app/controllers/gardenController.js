const db = require("../database");
const { User, Garden } = require ("../models");

const gardenController = {
    findOneWithUserId: async(req, res) => {
        try {
            const gardenItem = await Garden.findById(parseInt(req.params.garden_id));
            console.log(gardenItem);
            if (gardenItem && parseInt(req.params.user_id) === gardenItem.user_id) {
            res.json(gardenItem);
            } else {
            res.status(403).json({error: "No garden with such id for this user"});
            }
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
// user:id -> garden:id            garden:id -> user:id
module.exports = gardenController;