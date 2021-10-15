const bcrypt = require("bcrypt");

const { User } = require("../models");

const { slugify, standardErrors } = require("../helpers");

const jwt = require("../services/jwtService");
const blacklist = require("../services/jwtBlacklist");

const authController = {
	register: async (req, res) => {
		try {
			if (!req.body.password || !req.body.email || !req.body.username) {
				return res.status(400).json(standardErrors.BadRequestError);
			}

			const foundUser = await User.findOne({
				where: {
					email: req.body.email.toLowerCase(),
				},
			});

			if (foundUser) {
				return res.status(400).json(standardErrors.UserAlreadyExistsError);
			}

			await User.create({
				username: req.body.username,
				email: req.body.email.toLowerCase(),
				hashedPassword: bcrypt.hashSync(req.body.password, 10),
				usernameSlug: slugify(req.body.username),
			});

			res.json({
				created: true,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},

	login: async (req, res) => {
		try {
			if (!req.body.password || !req.body.email) {
				return res.status(400).json(standardErrors.BadRequestError);
			}

			const foundUser = await User.findOne({
				where: {
					email: req.body.email.toLowerCase(),
				},
			});

			if (!foundUser) {
				return res
					.status(400)
					.json(standardErrors.WrongUsernameOrPasswordError);
			}

			const passwordIsCorrect = bcrypt.compareSync(
				req.body.password,
				foundUser.hashedPassword,
			);

			if (!passwordIsCorrect) {
				return res
					.status(400)
					.json(standardErrors.WrongUsernameOrPasswordError);
			}

			console.log();
			res.json({
				logged: true,
				username: foundUser.username,
				email: foundUser.email,
				usernameSlug: foundUser.usernameSlug,
				token: jwt.generateTokenWith(foundUser.id, foundUser.username),
			});
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},

	logout: async (req, res) => {
		try {
			if (!res.locals.id || !res.locals.token) {
				return res.status(500).json(standardErrors.InternalServerError);
			}

			await blacklist.addToBlacklist(res.locals.id, res.locals.token);

			res.json({ redirect: true });
		} catch (error) {
			console.log(error);
			res.status(500).json(standardErrors.InternalServerError);
		}
	},
};

module.exports = authController;
