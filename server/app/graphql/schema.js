const { buildSchema } = require("graphql");
const schema = buildSchema(`
scalar JSON
scalar Date

type CultureType {
    # Attributs
    name: String!
    nameSlug: String!

    # Relations
    species: [Species!]
}

type SoilType {
    name: String!
    nameSlug: String!

    # Relations
    species: [Species!]
}

type Exposition {
    name: String!
    nameSlug: String!
    value: Int!

    # Relations
    species: [Species!]
}

type WaterNeed {
    name: String!
    nameSlug: String!
    value: Int!

    # Relations
    species: [Species!]
}

type EventType {
    # Attributes
    id: ID!
    name: String!
    nameSlug: String!

    # Relations
    events: [Event!]
}

type Event {
    # Attributes
    id: ID!
    fromDate: Date!
    untilDate: Date!

    # Relations
    species: Species!
    eventType: EventType!
}

type Species {
    # Attributes
    id: ID!
    name: String!
    description: String!
    nameSlug: String!
    imageUrl: String!
    co2Data: JSON
    color: String!
    
    exposition: [Exposition!]
    waterNeed: [WaterNeed!]
    cultureType: [CultureType!]
    soilType: [SoilType!]

    # Relations
    events: [Event!]
    gardens: [Garden!]
}   

type Garden {
    # Attributes
    id: ID!
    name: String!
    nameSlug: String!
    
    # Relations
    species: [Species!]
}

type Query {
    species: [Species!]
    gardens: [Garden!]
    events: [Event!]
    eventTypes: [EventType!]
    waterNeeds: [WaterNeed!]
    expositions: [Exposition!]
    cultureTypes: [CultureType!]
    soilTypes: [SoilType!]
}`);

module.exports = schema;
