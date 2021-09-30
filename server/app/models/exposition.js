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
	},
	{
		sequelize,
		underscored: true,
		modelName: "Exposition",
		tableName: "exposition",
		timestamps: true,
	},
);

module.exports = Exposition;
