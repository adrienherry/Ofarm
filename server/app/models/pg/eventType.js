const db = require("../services/pgPool");
const CoreModel = require("./coreModel");

class EventType extends CoreModel {
	static tableName = "event_type";
	static viewName = "event_type";

	constructor(obj = {}) {
		super(obj);

		for (const propName in obj) {
			this[propName] = obj[propName];
		}
	}
}

module.exports = EventType;
