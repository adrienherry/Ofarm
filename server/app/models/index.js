const EventType = require("./eventType");
const Event = require("./event");
const Species = require("./species");
const Garden = require("./garden");
const User = require("./user");

const Exposition = require("./exposition");
const SoilType = require("./soilType");
const CultureType = require("./cultureType");
const WaterNeed = require("./waterNeed");

EventType.hasMany(Event, {
	foreignKey: "eventTypeId",
	as: "events",
});

Event.belongsTo(EventType, {
	foreignKey: "eventTypeId",
	as: "eventType",
	onDelete: "cascade",
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
	onDelete: "cascade",
});

Species.belongsToMany(Exposition, {
	as: "exposition",
	through: "exposition_species",
	foreignKey: "speciesId",
	otherKey: "expositionId",
	onDelete: "cascade",
});

Exposition.belongsToMany(Species, {
	as: "species",
	through: "exposition_species",
	foreignKey: "expositionId",
	otherKey: "speciesId",
	onDelete: "cascade",
});

Species.belongsToMany(SoilType, {
	as: "soil",
	through: "soil_type_species",
	foreignKey: "speciesId",
	otherKey: "soilTypeId",
	onDelete: "cascade",
});

SoilType.belongsToMany(Species, {
	as: "soil_type",
	through: "soil_type_species",
	foreignKey: "soilTypeId",
	otherKey: "speciesId",
	onDelete: "cascade",
});

Species.belongsToMany(CultureType, {
	as: "culture",
	through: "culture_type_species",
	foreignKey: "speciesId",
	otherKey: "cultureTypeId",
	onDelete: "cascade",
});

CultureType.belongsToMany(Species, {
	as: "species",
	through: "culture_type_species",
	foreignKey: "cultureTypeId",
	otherKey: "speciesId",
	onDelete: "cascade",
});

Species.belongsToMany(WaterNeed, {
	as: "water_need",
	through: "species_water_need",
	foreignKey: "speciesId",
	otherKey: "waterNeedId",
	onDelete: "cascade",
});

WaterNeed.belongsToMany(Species, {
	as: "species",
	through: "species_water_need",
	foreignKey: "waterNeedId",
	otherKey: "speciesId",
	onDelete: "cascade",
});

Garden.hasMany;

module.exports = {
	EventType,
	Event,
	Species,
	Garden,
	User,
	Exposition,
	WaterNeed,
	SoilType,
	CultureType,
};
