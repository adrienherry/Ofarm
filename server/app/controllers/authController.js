const bcrypt = require("bcrypt");

const db = require("../services/sequelize");
const { User } = require("../models");

const slugify = require("../helpers/slugify");
const { password } = require("pg/lib/defaults");

const jwt = require("../services/jwtService");

const authController = {
	register: async (req, res) => {
		try {
			const newUser = await User.create({
				username: req.body.username,
				email: req.body.email.toLowerCase(),
				hashedPassword: bcrypt.hashSync(req.body.password, saltRounds),
				usernameSlug: slugify(req.body.username),
			});

			res.json({
				message: "User created successfully!",
				data: { newUser },
			});
		} catch (error) {
			console.log(error);
			res.json(error.message);
		}
	},

	login: async (req, res) => {
		try {
			if (!req.body.password || !req.body.email) {
				res.status(403).json({ error: "Bad request" });
				return;
			}

			const foundUser = await User.findOne({
				where: {
					email: (req.body.email).toLowerCase(),
				},
			});


			if (foundUser) {
				const passwordIsCorrect = bcrypt.compareSync(
					req.body.password,
					foundUser.hashedPassword,
				);

				if (!passwordIsCorrect) {
					res.status(401).json("Wrong username or password");
					return;
				}

				res.status(201).json({
					logged: true,
					username: foundUser.username,
					token: jwt.generateTokenWith(foundUser.username, foundUser.id),
				});
			} else {
				res.status(401).json("Wrong username or password");
				return;
			}
		} catch (error) {
			res.json(error.message);
		}
	},
};

module.exports = authController;
