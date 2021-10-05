const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/sequelize");

class User extends Model {}

/**
 * @typedef User
 * @property {integer} id - id of the user
 * @property {string} username.required - username of the user
 * @property {string} usernameSlug.required - username slug of the user
 * @property {string} hashedPassword.required - hashed password of the user
 * @property {string} email.required - email address of the user
 */
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
			validate: {
				isEmail: true
			}
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "User",
		tableName: "user",
	},
);

module.exports = User;
