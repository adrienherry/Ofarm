-- Deploy ofarm:03_calendar-event to pg

BEGIN;

CREATE TABLE "calendar_event" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    garden_id int NOT NULL REFERENCES "garden" (id) ON DELETE CASCADE NOT NULL,
    species_id int REFERENCES "species" (id) ON DELETE CASCADE,
    event_id int REFERENCES "event" ON DELETE CASCADE,
    from_date timestamptz NOT NULL,
    until_date timestamptz NOT NULL,
    created_at timestamptz NOT NULL DEFAULT (now()),
    updated_at timestamptz NOT NULL DEFAULT (now()),
    name text NOT NULL,
    comment  text
    --field_id int NOT NULL REFERENCES "field" (id), ON DELETE CASCADE NOT NULL,
    --variety_id int NOT NULL REFERENCES "variety" (id), ON DELETE CASCADE NOT NULL,
    
);

ALTER TABLE "calendar_event" ADD CONSTRAINT xor_species_id_event_id_not_null CHECK ((species_id IS NOT NULL) <> (event_id IS NOT NULL));

COMMIT;
