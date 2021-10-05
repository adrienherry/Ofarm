const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class CalendarEvent extends Model {}

/**
 * @typedef CalendarEvent
 * @property {integer} id - id of the event
 * @property {text} comment - custom comment associated to the event and defined by the user
 * @property {date} fromDate.required - date at which the event starts
 * @property {date} untilDate.required - date at which the event ends
 */
CalendarEvent.init(
	{
		id: {
			type: DataTypes.INTEGER, // 指定值的类型
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: "",
		},
		fromDate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		untilDate: {
			type: DataTypes.DATE,
			allowNull: false,
        },
	},
	{
		sequelize,
		underscored: true,
		modelName: "CalendarEvent",
		tableName: "calendar_event",
	},
);

module.exports = CalendarEvent;
