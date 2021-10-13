-- Revert ofarm:04_harvest from pg

BEGIN;

DROP TABLE "harvest";

COMMIT;
