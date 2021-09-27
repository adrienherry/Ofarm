-- Deploy ofarm:02_views_and_acl to pg
BEGIN;

CREATE VIEW "event_type_view" AS
SELECT
   *,
   slugify (name) AS name_slug
FROM
   "event_type";

CREATE VIEW event_view AS
SELECT
   "event".*,
   event_type_view.name AS event_type_name,
   event_type_view.name_slug AS event_type_slug
FROM
   "event"
   JOIN event_type_view ON event.event_type_id = event_type_view.id;

CREATE VIEW "species_view" AS
SELECT
   *,
   slugify (name) AS name_slug
FROM
   "species"
   JOIN (
      SELECT
         EV.species_id AS id,
         json_agg((
            SELECT
               x FROM (
                  SELECT
                     EV.*) AS x)) AS events
      FROM
         event_view AS EV
      GROUP BY
         EV.species_id) AS event_json USING (id);

CREATE VIEW garden_view AS
SELECT
   *,
   slugify (name) AS name_slug
FROM
   "garden"
   JOIN (
      SELECT
         garden_id AS id,
         json_agg((
            SELECT
               x FROM (
                  SELECT
                     species_view.*) AS x)) AS species
      FROM
         "garden"
         JOIN garden_species ON garden_species.garden_id = garden.id
         JOIN "species_view" ON species_view.id = garden_species.species_id
      GROUP BY
         garden_id
      ORDER BY
         garden_id ASC) AS garden_species_json USING (id);

CREATE VIEW user_view AS
SELECT
   *,
   slugify (username) AS username_slug
FROM
   "user"
   JOIN (
      SELECT
         GV.user_id AS id,
         json_agg((
            SELECT
               x FROM (
                  SELECT
                     GV.*) AS x)) AS gardens
      FROM
         garden_view AS GV
      GROUP BY
         GV.user_id) AS gardens_json USING (id);

COMMIT;
