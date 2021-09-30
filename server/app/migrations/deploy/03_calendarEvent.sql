-- Deploy ofarm:03_calendar-event to pg

BEGIN;

CREATE TABLE "calendar_event" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    garden_id int NOT NULL REFERENCES "garden" (id) ON DELETE CASCADE NOT NULL,
    species_id int NOT NULL REFERENCES "species" (id) ON DELETE CASCADE NOT NULL,
    event_type_id int NOT NULL REFERENCES "event_type" ON DELETE CASCADE NOT NULL,
    from_date timestamptz NOT NULL DEFAULT (now()),
    until_date timestamptz NOT NULL DEFAULT (now()),
    name text NOT NULL,
    comment  text
    --field_id int NOT NULL REFERENCES "field" (id), ON DELETE CASCADE NOT NULL,
    --variety_id int NOT NULL REFERENCES "variety" (id), ON DELETE CASCADE NOT NULL,
);

COMMIT;
