const bcrypt = require("bcrypt");

const db = require("../services/sequelize");
const { Op } = require("sequelize");
const { User } = require("../models");

const { slugify, standardErrors } = require("../helpers");

const jwt = require("../services/jwtService");
const saltRounds = 10;

const authController = {
	register: async (req, res) => {
		try {
			if (!req.body.password || !req.body.email || !req.body.username) {
				res.status(400).json(standardErrors.BadRequestError);
				return;
			}

			const foundUser = await User.findOne({
				where: {
					[Op.or]: {
						email: req.body.email.toLowerCase(),
						username: req.body.email.toLowerCase(),
					},
				},
			});

			if (foundUser) {
				res.status(400).json(standardErrors.UserAlreadyExistsError);
				return;
			}

			await User.create({
				username: req.body.username,
				email: req.body.email,
				hashedPassword: bcrypt.hashSync(req.body.password, 10),
				usernameSlug: slugify(req.body.username),
			});

			res.json({
				created: true,
			});
		} catch (error) {
			res.json(error);
		}
	},

	login: async (req, res) => {
		try {
			if (!req.body.password || !req.body.email) {
				res.status(400).json(standardErrors.BadRequestError);
				return;
			}

			const foundUser = await User.findOne({
				where: {
					email: req.body.email.toLowerCase(),
				},
			});

			if (!foundUser) {
				res.status(400).json(standardErrors.WrongUsernameOrPasswordError);
				return;
			}

			const passwordIsCorrect = bcrypt.compareSync(
				req.body.password,
				foundUser.hashedPassword,
			);

			if (!passwordIsCorrect) {
				res.status(400).json(standardErrors.WrongUsernameOrPasswordError);
				return;
			}

			res.json({
				logged: true,
				username: foundUser.username,
				token: jwt.generateTokenWith(foundUser.username, foundUser.id),
			});
		} catch (error) {
			res.json(error);
		}
	},
};

module.exports = authController;
