-- Verify ofarm:05_fields on pg

BEGIN;

SELECT PostGIS_version();
SELECT id FROM "field" WHERE false;
SELECT * FROM "field_species" WHERE false;

ROLLBACK;
