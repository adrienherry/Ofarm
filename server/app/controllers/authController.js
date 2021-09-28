const bcrypt = require("bcrypt");

const db = require("../services/sequelize");
const { Op } = require("sequelize");
const { User } = require("../models");

const slugify = require("../helpers/slugify");
const { password } = require("pg/lib/defaults");

const jwt = require("../services/jwtService");

const authController = {
	register: async (req, res) => {
		try {
		} catch (error) {
			console.log(error);
			res.json(error.message);
		}
	},

	login: async (req, res) => {
		try {
			if (!req.body.password || !req.body.email) {
				res.status(400).json({ error: "Bad request" });
				return;
			}

			const foundUser = await User.findOne({
				where: {
					email: req.body.email.toLowerCase(),
				},
			});

			if (!foundUser) {
				res.status(400).json("Wrong username or password");
				return;
			}

			const passwordIsCorrect = bcrypt.compareSync(
				req.body.password,
				foundUser.hashedPassword,
			);

			if (!passwordIsCorrect) {
				res.status(400).json("Wrong username or password");
				return;
			}

			res.json({
				logged: true,
				username: foundUser.username,
				slug: foundUser.usernameSlug,
				token: jwt.generateTokenWith(foundUser.id, foundUser.username),
			});
			
		} catch (error) {
			res.json(error.message);
		}
	},
};

module.exports = authController;
