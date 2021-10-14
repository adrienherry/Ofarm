const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class Exposition extends Model {}

Exposition.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		nameSlug: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		value: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "Exposition",
		tableName: "exposition",
		defaultScope: {
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
		},
	},
);

module.exports = Exposition;
