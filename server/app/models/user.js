const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.INTEGER, // 指定值的类型
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		usernameSlug: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		hashedPassword: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "User",
		tableName: "user",
		timestamps: true,
	},
);

module.exports = User;