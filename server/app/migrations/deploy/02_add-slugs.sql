-- Deploy ofarm:02_add-slugs to pg

BEGIN;

UPDATE
   "water_need"
SET
   name_slug = slugify (name);

ALTER TABLE "water_need"
   ADD CONSTRAINT water_need_name_slug_unique UNIQUE (name_slug),
   ALTER COLUMN name_slug SET NOT NULL;

UPDATE
   "culture_type"
SET
   name_slug = slugify (name);

ALTER TABLE "culture_type"
   ADD CONSTRAINT culture_type_name_slug_unique UNIQUE (name_slug),
   ALTER COLUMN name_slug SET NOT NULL;

UPDATE
   "soil_type"
SET
   name_slug = slugify (name);

ALTER TABLE "soil_type"
   ADD CONSTRAINT soil_type_name_slug_unique UNIQUE (name_slug),
   ALTER COLUMN name_slug SET NOT NULL;

UPDATE
   "exposition"
SET
   name_slug = slugify (name);

ALTER TABLE "water_type"
   ADD CONSTRAINT water_type_name_slug_unique UNIQUE (name_slug),
   ALTER COLUMN name_slug SET NOT NULL;

UPDATE
   "species"
SET
   name_slug = slugify (name);

ALTER TABLE "species"
   ADD CONSTRAINT species_name_slug_unique UNIQUE (name_slug),
   ALTER COLUMN name_slug SET NOT NULL;

UPDATE
   "garden"
SET
   name_slug = slugify (name);

ALTER TABLE "garden"
   ADD CONSTRAINT garden_user_id_name_slug_unique UNIQUE (name_slug, user_id),
   ADD CONSTRAINT garden_user_id_name_unique UNIQUE (name, user_id);

UPDATE
   "user"
SET
   username_slug = slugify (username);

ALTER TABLE "user"
   ADD CONSTRAINT user_username_slug_unique UNIQUE (username_slug),
   ALTER COLUMN username_slug SET NOT NULL;

UPDATE
   "event_type"
SET
   name_slug = slugify (name);

ALTER TABLE "event_type"
   ADD CONSTRAINT event_type_name_slug_unique UNIQUE (name_slug),
   ALTER COLUMN name_slug SET NOT NULL;

COMMIT;