const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class Field extends Model {}

/**
 * @typedef Field
 * @property {integer} id - id of the field
 * @property {object} shape - polygon defining the field
 */
Field.init(
	{
		id: {
			type: DataTypes.INTEGER, // 指定值的类型
			primaryKey: true,
			autoIncrement: true,
		},
		shape: {
			type: DataTypes.GEOMETRY,
			allowNull: false,
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "Field",
		tableName: "field",
	},
);

module.exports = Field;
