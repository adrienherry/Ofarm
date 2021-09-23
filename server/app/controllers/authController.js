const bcrypt = require("bcrypt");

const db = require("../services/sequelize");
const { User } = require("../models");

const authController = {
	register: async (req, res) => {
		try {
			const newUser = new User(req.body);
			const response = await newUser.save();

			if (response.error) res.status(500).json("Error : " + response.error);

			res.json({
				message: "User created successfully!",
				data: { response },
			});
		} catch (error) {
			res.json(error.message);
		}
	},

	login: async (req, res) => {
        try {
            console.log(req.body)
            const user = await User.findByEmail(req.body.email);
            console.log(user);
			const hashed_password = await bcrypt.hash(req.body.password, 10);
			const is_equal = await bcrypt.compare(
				req.body.password,
				"$2b$10$/kmbu0zXpMnmFuvIuz6B2ujKbpAVN3613tLpwb5nUm26nIvtkJ2Q.",
			);
			console.log(hashed_password);
			res.json({
				hashedPassword: hashed_password,
				isEqual: is_equal,
			});
		} catch (error) {
			res.json(error.message);
		}
	},

	logout: async (req, res) => {
		try {
			res.send("OK");

			// On vérifie si l'utilisateur est connecté (s'il a un req.session)
			// Si oui, on supprime son req.session et on le redirige sur la page d'accueil
		} catch (error) {
			res.json(error.message);
		}
	},
};

module.exports = authController;
