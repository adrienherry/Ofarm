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
});

Species.hasMany(Event, {
	foreignKey: "speciesId",
	as: "events",
});

Event.belongsTo(Species, {
	foreignKey: "speciesId",
	as: "species",
});

Species.belongsToMany(Garden, {
	as: "gardens",
	through: "garden_species",
	foreignKey: "speciesId",
	otherKey: "gardenId",
});

Garden.belongsToMany(Species, {
	as: "species",
	through: "garden_species",
	foreignKey: "gardenId",
	otherKey: "speciesId",
});

User.hasMany(Garden, {
	foreignKey: "userId",
	as: "gardens",
});

Garden.belongsTo(User, {
	foreignKey: "userId",
	as: "owner",
});

Garden.hasMany;

module.exports = { EventType, Event, Species, Garden, User };
