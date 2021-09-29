const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class Species extends Model {}

/**
 * @typedef Species
 * @property {integer} id - id of the species
 * @property {string} name.required - name of the species
 * @property {string} nameSlug.required - slug name of the species
 * @property {string} imageUrl - URL of the species illustration
 * @property {string} color - color associated to the species
 * @property {json} co2Data - JSON object containing all CO2-related data
 */
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
			validate: {
				isUrl: true,
			},
		},
		co2Data: {
			type: DataTypes.JSON,
			allowNull: true,
		},
		color: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "#ffffff00",
			validate: {
				is: ["^(#([0-9a-fA-F]{6,8}))"],
			},
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
