const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class Garden extends Model {}

/**
 * @typedef Garden
 * @property {integer} id - id of the garden
 * @property {string} userId - id of the owner of the garden
 * @property {string} name.required - name of the garden
 * @property {string} nameSlug.required - slug name of the garden
 */

Garden.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
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
	},
);

module.exports = Garden;
