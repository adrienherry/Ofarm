require("dotenv").config();
console.log(process.env.DATABASE_URL);

const { Species } = require("../app/models");

Species.findByPk(1, {
	include: [
		"events",
		{
			association: "events",
			include: "event_type",
		},
	],
})
	.then((species) => console.log(species))
	.catch((error) => console.log(error));
