const { Harvest, Garden } = require("../models");
const { standardErrors } = require("../helpers");
const { where, col, Op } = require("sequelize");

const harvestController = {
	getHarvests: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}
			const userId = res.locals.id;

			const harvests = await Harvest.findAll({
				where: {
					'$garden.user_id$': userId,
				},
                include: {
                    model: Garden,
                    required: true,
                    as: "garden"
                }
                
			});
            res.json(harvests);
            
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},

	createHarvest: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
				return;
			}
			const userId = res.locals.id;

			const { speciesId, gardenId, quantity, date } = req.body;

			if (!speciesId || !gardenId || !quantity || !date) {
				res.status(403).json(standardErrors.BadRequestError);
				return;
			}

			const garden = await Garden.findOne({
				where: {
					id: gardenId,
					userId: userId,
				},
				include: "species",
			});

			if (!garden) {
				res.status(403).json(standardErrors.GardenNotFoundError);
			}

			if (
				!garden.species ||
				!garden.species.find((item) => item.id === speciesId)
			) {
				// Species not found in garden
				res.status(403).json(standardErrors.SpeciesNotInGardenError);
			}

			const newHarvest = await Harvest.create({
				speciesId: speciesId,
				gardenId: gardenId,
				quantity: quantity,
				date: date,
				comment: req.body.comment ? req.body.comment.trim() : "",
			});

			console.log(newHarvest);

			if (!newHarvest.id) {
				res.status(500).json(standardErrors.InternalServerError);
				return;
			}

			res.json(newHarvest);
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},
};

module.exports = harvestController;
