const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class EventType extends Model {}

/**
 * @typedef EventType
 * @property {integer} id - id of the event type
 * @property {string} name.required - name of the event type
 * @property {string} nameSlug.required - slug name of the event type
 */
EventType.init(
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
		color: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "#ffffff00",
			validate: {
				is: ["^(#([0-9a-fA-F]{6,8}))"],
			},
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "EventType",
		tableName: "event_type",
		defaultScope: {
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
		},
	},
);

module.exports = EventType;
