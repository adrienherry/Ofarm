const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class WaterNeed extends Model {}

WaterNeed.init(
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
		modelName: "WaterNeed",
		tableName: "water_need",
	},
);

module.exports = WaterNeed;
