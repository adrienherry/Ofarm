BEGIN;

CREATE EXTENSION IF NOT EXISTS "unaccent";

CREATE OR REPLACE FUNCTION slugify (value text, sep text)
   RETURNS text
   AS $$
BEGIN
   RETURN trim(BOTH sep FROM regexp_replace(lower(unaccent (value)), '[^a-z0-9\\-]+', sep, 'gi' -- global insensitive
));
END;
$$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION slugify (value text)
   RETURNS text
   AS $$
BEGIN
   RETURN slugify (value, '-');
END;
$$
LANGUAGE plpgsql;

BEGIN;

CREATE TABLE "user" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   email text NOT NULL UNIQUE,
   hashed_password text NOT NULL,
   username text NOT NULL UNIQUE,
   username_slug text,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "garden" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   user_id int REFERENCES "user" (id) ON DELETE CASCADE NOT NULL,
   name text NOT NULL,
   name_slug text,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now()),
   UNIQUE (user_id, name)
);

CREATE TABLE "species" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   name text NOT NULL UNIQUE,
   name_slug text,
   image_url text,
   color text DEFAULT '#ffffff00',
   description text,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "event_type" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   name text NOT NULL UNIQUE,
   name_slug text,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "event" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   species_id int REFERENCES "species" (id) ON DELETE CASCADE NOT NULL,
   event_type_id int REFERENCES "event_type" (id) ON DELETE CASCADE NOT NULL,
   from_date date NOT NULL,
   until_date date NOT NULL,
   option_name text NOT NULL DEFAULT ('default'),
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "garden_species" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   garden_id int NOT NULL REFERENCES "garden" (id) ON DELETE CASCADE NOT NULL,
   species_id int NOT NULL REFERENCES "species" (id) ON DELETE CASCADE NOT NULL,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now()),
   UNIQUE (garden_id, species_id)
);

COMMIT;
