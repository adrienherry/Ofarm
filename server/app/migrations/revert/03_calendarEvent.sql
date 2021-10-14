-- Revert ofarm:03_calendar-event from pg

BEGIN;

DROP TABLE "calendar_event";
-- XXX Add DDLs here.

COMMIT;
