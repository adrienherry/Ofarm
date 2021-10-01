-- Verify ofarm:03_calendar-event on pg

BEGIN;

SELECT id from "calendar_event" WHERE false;
-- XXX Add verifications here.


ROLLBACK;
