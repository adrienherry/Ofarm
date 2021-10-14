const db = require("../services/sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const slugify = require("../helpers/slugify");

const { User, Harvest } = require("../models");
const { standardErrors } = require("../helpers");

const userController = {
	findOne: async (req, res) => {
		try {
			if (!res.locals.id) {
				res.status(403).json(standardErrors.UserNotLoggedError);
			}

			const id = res.locals.id;
			const userItem = await User.findByPk(id, {
				include: [
					"gardens",
					{
						association: "gardens",
						include: [
							"species",
							{
								association: "species",
								include: {
									model: Harvest,
									as: "harvests",
									attributes: {
										exclude: [
											// "speciesId",
											"gardenId",
											"createdAt",
											"updatedAt",
										],
									},
								},
							},
							{
								association: "species",
								include: [
									{
										association: "events",
										include: "eventType",
										attributes: {
											exclude: [
												"createdAt",
												"updatedAt",
												"eventTypeId",
												"speciesId",
											],
										},
									},
								],
								through: {
									attributes: [],
								},
								attributes: {
									exclude: ["createdAt", "updatedAt"],
								},
							},
						],
					},
				],
			});

			return res.json(userItem);
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},

	save: async (req, res) => {
		if (!res.locals.id) {
			res.status(403).json(standardErrors.UserNotLoggedError);
			return;
		}

		const id = res.locals.id;

		try {
			const { email, username, password } = req.body;
			if (!email && !username && !password) {
				return res.status(403).json(standardErrors.BadRequestError);
			}

			let user = await User.findByPk(parseInt(id));
			if (!user) {
				return res.status(403).json(standardErrors.BadRequestError);
			}

			console.log(email === user.email);
			if (email && email !== user.email) {
				user.email = email;
			}

			if (user && user !== user.username) {
				user.username = username;
				user.usernameSlug = slugify(username);
			}

			if (password) {
				const isEqual = await bcrypt.compare(
					req.body.password,
					user.hashedPassword,
				);

				if (!isEqual)
					user.hashedPassword = bcrypt.hashSync(password, saltRounds);
			}
			await user.save();
			res.json({ updated: true });
		} catch (error) {
			return res.status(500).json(standardErrors.InternalServerError);
		}
	},
};

module.exports = userController;
