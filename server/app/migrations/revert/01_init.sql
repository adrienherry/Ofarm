BEGIN;

DROP TABLE "garden_species";
DROP TABLE "event";
DROP TABLE "species";
DROP TABLE "garden";

DROP TABLE "event_type";
DROP TABLE "user";

DROP TABLE "agribalyse";

DROP FUNCTION IF EXISTS slugify(TEXT, TEXT);
DROP FUNCTION IF EXISTS slugify(TEXT);
COMMIT;