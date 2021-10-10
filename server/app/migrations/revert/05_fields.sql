-- Revert ofarm:05_fields from pg

BEGIN;

ALTER TABLE "calendar_event"
DROP COLUMN field_id;

DROP TABLE "field_species";

DROP TABLE "field";

DROP EXTENSION postgis;

COMMIT;
