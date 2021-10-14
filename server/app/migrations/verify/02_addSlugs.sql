-- Verify ofarm:02_add-slugs on pg

BEGIN;

-- XXX Add verifications here.
SELECT * FROM pg_class where relname = 'water_need_name_slug_unique' AND false;
SELECT * FROM pg_class where relname = 'culture_type_name_slug_unique' AND false;
SELECT * FROM pg_class where relname = 'soil_type_name_slug_unique' AND false;
SELECT * FROM pg_class where relname = 'exposition_species_slug_unique' AND false;
SELECT * FROM pg_class where relname = 'species_name_slug_unique' AND false;
SELECT * FROM pg_class where relname = 'garden_user_id_name_slug_unique' AND false;
SELECT * FROM pg_class where relname = 'garden_user_id_name_unique' AND false;
SELECT * FROM pg_class where relname = 'user_username_slug_unique' AND false;
SELECT * FROM pg_class where relname = 'event_type_name_slug_unique' AND false;

ROLLBACK;
