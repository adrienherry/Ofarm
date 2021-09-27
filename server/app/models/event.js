const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class Event extends Model {}

/**
 * @typedef Event
 * @property {integer} id - id of the event
 * @property {date} fromDate.required - date at which the event starts
 * @property {date} untilDate.required - date at which the event ends
 */
Event.init(
	{
		id: {
			type: DataTypes.INTEGER, // 指定值的类型
			primaryKey: true,
			autoIncrement: true,
		},
		fromDate: {
			type: DataTypes.DATE,
			allowNull: false,
			unique: true,
		},
		untilDate: {
			type: DataTypes.DATE,
			allowNull: false,
			unique: true,
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "Event",
		tableName: "event",
		timestamps: true,
	},
);

module.exports = Event;
