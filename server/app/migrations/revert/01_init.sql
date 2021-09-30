BEGIN;

DROP TABLE "exposition_species";
DROP TABLE "species_water_need";
DROP TABLE "culture_type_species";
DROP TABLE "soil_type_species";

DROP TABLE "garden_species";
DROP TABLE "event";
DROP TABLE "species";
DROP TABLE "garden";

DROP TABLE "event_type";
DROP TABLE "user";

DROP EXTENSION "unaccent";
DROP FUNCTION IF EXISTS slugify(TEXT);
DROP FUNCTION IF EXISTS slugify(TEXT, TEXT);
COMMIT;