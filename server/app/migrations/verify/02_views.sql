-- Verify ofarm:02_views_and_acl on pg
BEGIN;

-- XXX Add verifications here.
SELECT
    *
FROM
    event_view
WHERE
    FALSE;

SELECT
    *
FROM
    event_type_view
WHERE
    FALSE;

SELECT
    *
FROM
    garden_view
WHERE
    FALSE;

SELECT
    *
FROM
    species_view
WHERE
    FALSE;

SELECT
    *
FROM
    user_view
WHERE
    FALSE;

ROLLBACK;
