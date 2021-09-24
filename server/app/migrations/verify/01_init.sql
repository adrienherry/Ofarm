BEGIN;

SELECT id from "user" WHERE false;
SELECT id from "garden" WHERE false;
SELECT id from "species" WHERE false;
SELECT id from "event" WHERE false;
SELECT id from "event_type" WHERE false;
SELECT id from "garden_species" WHERE false;

SELECT id from "agribalyse" WHERE false;

ROLLBACK;