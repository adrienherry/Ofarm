-- Verify ofarm:04_harvest on pg

BEGIN;

-- XXX Add verifications here.
SELECT id FROM "harvest" WHERE false;

ROLLBACK;
