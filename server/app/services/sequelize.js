const { Sequelize } = require("sequelize");

const DB_CONFIG =
	process.env.NODE_ENV === "test"
		? process.env.DATABASE_URL_TEST
		: process.env.DATABASE_URL;
const sequelize = new Sequelize(DB_CONFIG, {
	dialect: "postgres",
	define: {
		timestamps: true,
	},
});

module.exports = sequelize;
