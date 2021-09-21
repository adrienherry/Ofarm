const db = require("../database");
const CoreModel = require("./coreModel");

class Garden extends CoreModel {
	static tableName = "garden";
	static viewName = "garden_view";

	constructor(obj = {}) {
		super(obj);

		for (const propName in obj) {
			this[propName] = obj[propName];
		}
	}
}

module.exports = Garden;
