BEGIN;

INSERT INTO "calendar_event" (
   name,
   garden_id,
   species_id,
   event_type_id)
SELECT
   CONCAT(species.name, ' - ', event_type.name),
   garden.id AS garden_id,
   species.id AS species_id,
   event_type.id AS event_type_id
FROM
   "garden"
   JOIN "garden_species" ON garden.id = garden_species.garden_id
   JOIN "species" ON garden_species.species_id = species.id
   JOIN "event" ON species.id = event.species_id
   JOIN "event_type" ON event.event_type_id = event_type.id;

COMMIT;
