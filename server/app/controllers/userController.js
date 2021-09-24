const db = require("../services/sequelize");
const { User } = require("../models");

const userController = {
	findOne: async (req, res) => {
		try {
			const id = parseInt(req.params.id);
			const userItem = await User.findByPk(id, {
				include: [
					{
						association: "gardens",
						include: [
							"species",
							{
								association: "species",
                                include: ["events", {
                                    association: "events",
                                    include:"eventType"
                                }],
								through: {
									attributes: [],
								},
							},
						],
					},
				],
			});

			res.json(userItem);
		} catch (error) {
			res.status(500).json(error.message);
		}
	},
};

module.exports = userController;
