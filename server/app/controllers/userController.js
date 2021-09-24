const db = require("../services/sequelize");
const bcrypt = require("bcrypt");
const saltRounds =10;
const slugify = require("../helpers/slugify");

const {
	User
} = require("../models");
const {
	response
} = require("express");

const userController = {
	findOne: async (req, res) => {
		try {
			const id = parseInt(req.params.id);
			const userItem = await User.findByPk(id, {
				include: [{
					association: "gardens",
					include: [
						"species",
						{
							association: "species",
							include: ["events", {
								association: "events",
								include: "eventType"
							}],
							through: {
								attributes: [],
							},
						},
					],
				}, ],
			});

			res.json(userItem);
		} catch (error) {
			res.status(500).json(error.message);
		}
	},

	    save: async (req, res) => {
		const {	id } = req.params		
		try {
		const {
			email,
			username,
			password
		} = req.body;
		if (!email && !username && !password) {
			res.status(403).json({error: "Empty user request"})
			return;
		}

		let user = await User.findByPk(parseInt(id));
		if (!user) {
			res.status(403).json({error: "Bad request"})
		}

		console.log(email === user.email)
		if (email && email !== user.email) {
			console.log("je suis bien rentré")
			user.email = email;
		}

		if (user && user !== user.username) {
			user.username = username;
			user.usernameSlug = slugify(username)
		}

		if (password) {
			// 
			//bcrypt.hashSync(req.body.password, saltRounds)
				const isEqual = await bcrypt.compare(
				req.body.password,
				user.hashedPassword,
			);

			if (password !== user.hashedPassword)
				user.hashedPassword = bcrypt.hashSync(password, saltRounds)
				}
		console.log(user);
		const results = await user.save();
		/*const results = await User.update(user, {
			where: {id: user.id},
			returning: true
		});*/
		console.log(results);
		//console.log(status);
		//console.log(user); 
		res.json({message: "Update sucessfull"});
		} catch (error) {
		console.log(error);
		res.status(500).json(error);
		return;
		}
	},


	
}

module.exports = userController;