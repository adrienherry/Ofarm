const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class Event extends Model {}

Event.init(
	{
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
