const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class EventType extends Model {}

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
