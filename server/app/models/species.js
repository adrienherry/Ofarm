const db = require("../database");
const CoreModel = require("./coreModel");

class Species extends CoreModel {
	static tableName = "species";
	static viewName = "species_view";

	constructor(obj = {}) {
		super(obj);

		for (const propName in obj) {
			this[propName] = obj[propName];
		}
	}
}

module.exports = Species;
