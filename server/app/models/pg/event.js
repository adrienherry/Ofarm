const db = require("../services/pgPool");
const CoreModel = require("./coreModel");

class Event extends CoreModel {
	static tableName = "event";
	static viewName = "event_view";

	constructor(obj = {}) {
		super(obj);

		for (const propName in obj) {
			this[propName] = obj[propName];
		}
	}
}

module.exports = Event;
