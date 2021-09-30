-- Revert ofarm:02_add-slugs from pg

BEGIN;

ALTER TABLE "water_need"
   DROP CONSTRAINT user_username_slug_unique,
   ALTER COLUMN username_slug DROP NOT NULL;

UPDATE
   "water_need"
SET
   name_slug = null;

ALTER TABLE "exposition"
   DROP CONSTRAINT exposition_name_slug_unique,
   ALTER COLUMN name_slug DROP NOT NULL;

UPDATE
   "exposition"
SET
   name_slug = null;

ALTER TABLE "soil_type"
   DROP CONSTRAINT soil_type_name_slug_unique,
   ALTER COLUMN name_slug DROP NOT NULL;

UPDATE
   "soil_type"
SET
   name_slug = null;

ALTER TABLE "culture_type"
   DROP CONSTRAINT culture_type_name_slug_unique,
   ALTER COLUMN name_slug DROP NOT NULL;

UPDATE
   "culture_type"
SET
   name_slug = null;

ALTER TABLE "species"
   DROP CONSTRAINT species_name_slug_unique,
   ALTER COLUMN name_slug DROP NOT NULL;

UPDATE
   "species"
SET
   name_slug = slugify (name);

ALTER TABLE "garden"
   DROP CONSTRAINT garden_user_id_name_slug_unique,
   DROP CONSTRAINT garden_user_id_name_unique;

UPDATE
   "garden"
SET
   name_slug = null;

ALTER TABLE "user"
   DROP CONSTRAINT user_username_slug_unique,
   ALTER COLUMN username_slug DROP NOT NULL;

UPDATE
   "user"
SET
   username_slug = null;

ALTER TABLE "event_type"
   DROP CONSTRAINT event_type_name_slug_unique,
   ALTER COLUMN name_slug DROP NOT NULL;


UPDATE
   "event_type"
SET
   name_slug = null;
COMMIT;
