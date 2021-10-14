const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class Harvest extends Model {}

/**
 * @typedef Harvest
 * @property {integer} id - id of the Harvest
 * @property {integer} speciesId.required - id of the species that was harvested
 * @property {integer} gardenId.required - id of the garden in which the harvest was performed
 * @property {double} quantity.required - Quantity harvested in kilogram
 * @property {date} date.required - Date at which the harvest was performed
 * @property {string} comment - optional comment associated to the harvest
 */

Harvest.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		quantity: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		underscored: true,

		modelName: "Harvest",
		tableName: "harvest",
		defaultScope: {
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
		},
	},
);

module.exports = Harvest;
