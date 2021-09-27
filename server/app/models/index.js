const EventType = require("./eventType");
const Event = require("./event");
const Species = require("./species");
const Garden = require("./garden");
const User = require("./user");

EventType.hasMany(Event, {
	foreignKey: "eventTypeId",
	as: "events",
});

Event.belongsTo(EventType, {
	foreignKey: "eventTypeId",
	as: "eventType",
	onDelete: "cascade"
});

Species.hasMany(Event, {
	foreignKey: "speciesId",
	as: "events",
});

Event.belongsTo(Species, {
	foreignKey: "speciesId",
	as: "species",
	onDelete: "cascade",
});

Species.belongsToMany(Garden, {
	as: "gardens",
	through: "garden_species",
	foreignKey: "speciesId",
	otherKey: "gardenId",
	onDelete: "cascade",
});

Garden.belongsToMany(Species, {
	as: "species",
	through: "garden_species",
	foreignKey: "gardenId",
	otherKey: "speciesId",
	onDelete: "cascade",
});

User.hasMany(Garden, {
	foreignKey: "userId",
	as: "gardens",
});

Garden.belongsTo(User, {
	foreignKey: "userId",
	as: "owner",
	onDelete: "cascade"
});

Garden.hasMany;

module.exports = { EventType, Event, Species, Garden, User };
