BEGIN;

-- Create a function that takes a date and a year and returns the same date with the given year
DROP FUNCTION IF EXISTS change_year(date,text);
CREATE OR REPLACE FUNCTION change_year (initDate date, year text)
   RETURNS date
   AS $$
BEGIN
   RETURN (
         SELECT
            ( initDate::date + MAKE_INTERVAL(YEARS:= year::integer - extract(YEAR FROM initDate)::integer))::date
);
END;
$$
LANGUAGE plpgsql;

INSERT INTO "calendar_event" (
   name,
   garden_id,
   species_id,
   event_id,
   from_date,
   until_date
   )
SELECT
   CONCAT(species.name, ' - ', event_type.name),
   garden.id AS garden_id,
   species.id AS species_id,
   event_type.id AS event_type_id,
   change_year(event.from_date, (SELECT extract('year' FROM now())::TEXT)) AS from_date,
   change_year(event.until_date, (SELECT extract('year' FROM now())::TEXT)) AS until_date
FROM
   "garden"
   JOIN "garden_species" ON garden.id = garden_species.garden_id
   JOIN "species" ON garden_species.species_id = species.id
   JOIN "event" ON species.id = event.species_id
   JOIN "event_type" ON event.event_type_id = event_type.id;

COMMIT;
