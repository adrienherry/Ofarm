-- Deploy ofarm:05_fields to pg
BEGIN;

CREATE EXTENSION "postgis";

CREATE TABLE "field" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   garden_id int REFERENCES "garden" (id) ON DELETE CASCADE NOT NULL,
   shape polygon NOT NULL,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "field_species" (
   species_id int REFERENCES "species" (id) ON DELETE CASCADE NOT NULL,
   field_id int REFERENCES "field" (id) ON DELETE CASCADE NOT NULL,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

ALTER TABLE "calendar_event"
ADD COLUMN field_id int REFERENCES "field" (id) ON DELETE SET NULL;


COMMIT;
