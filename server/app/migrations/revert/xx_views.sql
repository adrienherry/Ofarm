-- Revert ofarm:02_views_and_acl from pg
BEGIN;

DROP VIEW IF EXISTS user_view;

DROP VIEW IF EXISTS garden_view;

DROP VIEW IF EXISTS species_view;

DROP VIEW IF EXISTS event_view;

DROP VIEW IF EXISTS event_type_view;

COMMIT;
