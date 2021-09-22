const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class Garden extends Model {}

Garden.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		nameSlug: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		underscored: true,
		indexes: [
			{
				unique: true,
				fields: ["name", "userId"],
			},
			{
				unique: true,
				fields: ["nameSlug", "userId"],
			},
		],

		modelName: "Garden",
		tableName: "garden",
		timestamps: true,
	},
);

module.exports = Garden;
