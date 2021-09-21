const db = require("../database");
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
}

module.exports = User;
