const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class Garden extends Model {}

Garden.init(
	{
		id: {
			type: DataTypes.INTEGER, // 指定值的类型
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
		timestamps: true,
	},
);

module.exports = Garden;
