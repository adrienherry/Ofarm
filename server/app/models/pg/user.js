const db = require("../services/pgPool");
const CoreModel = require("./coreModel");

class User extends CoreModel {
	static tableName = "user";
    static viewName = "user_view";
    
	constructor(obj = {}) {
		super(obj);

		for (const propName in obj) {
			this[propName] = obj[propName];
		}
	}

	static async findByEmail(email) {
		try {
			console.log(email)
			const { rows } = await db.query(
				`SELECT * FROM "${this.viewName}" WHERE email=$1`,
				[email],
			);

			console.log(rows)

			if (!rows[0]) return null;

			return rows[0];
		} catch (error) {
			return { error: error.message };
		}
	}
}

module.exports = User;
