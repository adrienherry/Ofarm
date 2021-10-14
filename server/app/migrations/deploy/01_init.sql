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

CREATE TABLE "user" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   email text NOT NULL UNIQUE,
   hashed_password text NOT NULL,
   username text NOT NULL,
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

CREATE TABLE "exposition" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   name text NOT NULL UNIQUE,
   name_slug text UNIQUE,
   value int NOT NULL,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "water_need" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   name text NOT NULL UNIQUE,
   name_slug text UNIQUE,
   value int NOT NULL,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "culture_type" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   name text NOT NULL UNIQUE,
   name_slug text UNIQUE,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "soil_type" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   name text NOT NULL UNIQUE,
   name_slug text UNIQUE,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);


CREATE TABLE "species" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   name text NOT NULL UNIQUE,
   name_slug text,
   image_url text,
   color text DEFAULT '#ffffff00',
   description text,
   co2_data json,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "event_type" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   name text NOT NULL UNIQUE,
   name_slug text,
   color text NOT NULL,
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

CREATE TABLE "exposition_species" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   exposition_id int NOT NULL REFERENCES "exposition" (id) ON DELETE CASCADE NOT NULL,
   species_id int NOT NULL REFERENCES "species" (id) ON DELETE CASCADE NOT NULL,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "culture_type_species" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   culture_type_id int NOT NULL REFERENCES "culture_type" (id) ON DELETE CASCADE NOT NULL,
   species_id int NOT NULL REFERENCES "species" (id) ON DELETE CASCADE NOT NULL,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "species_water_need" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   water_need_id int NOT NULL REFERENCES "water_need" (id) ON DELETE CASCADE NOT NULL,
   species_id int NOT NULL REFERENCES "species" (id) ON DELETE CASCADE NOT NULL,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "soil_type_species" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   soil_type_id int NOT NULL REFERENCES "soil_type" (id) ON DELETE CASCADE NOT NULL,
   species_id int NOT NULL REFERENCES "species" (id) ON DELETE CASCADE NOT NULL,
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);


COMMIT;
