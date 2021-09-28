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
	},
	{
		sequelize,
		underscored: true,
		modelName: "EventType",
		tableName: "event_type",
		timestamps: true,
	},
);

module.exports = EventType;
