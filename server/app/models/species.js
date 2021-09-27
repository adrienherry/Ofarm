const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class Species extends Model {}

Species.init(
	{
		id: {
			type: DataTypes.INTEGER, // 指定值的类型
			primaryKey: true,
			autoIncrement: true,
		},
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
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		co2Data: {
			type: DataTypes.JSON,
			allowNull: true
		},
		color: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "#ffffff00",
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "Species",
		tableName: "species",
		timestamps: true,
	},
);

module.exports = Species;
