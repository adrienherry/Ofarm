const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class SoilType extends Model {}

SoilType.init(
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
		modelName: "SoilType",
		tableName: "soil_type",
		timestamps: false,
	},
);

module.exports = SoilType;
