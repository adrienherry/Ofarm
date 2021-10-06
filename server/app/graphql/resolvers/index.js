const Garden = require("./garden");
const Species = require("./species");
const Event = require("./event");
const Exposition = require("./exposition");
const WaterNeed = require("./waterNeed");
const SoilType = require("./soilType");
const CultureType = require("./cultureType");

const resolvers = { ...Garden, ...Event, ...Species, ...CultureType, ...SoilType, ... Exposition, ...WaterNeed };

module.exports = resolvers;
