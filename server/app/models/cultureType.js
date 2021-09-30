const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class CultureType extends Model {}

CultureType.init(
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
		modelName: "CultureType",
		tableName: "culture_type",
		timestamps: false,
	},
);

module.exports = CultureType;
