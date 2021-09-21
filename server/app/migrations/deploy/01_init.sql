BEGIN;

-- Create slugify functions to generate slugs for frontend client
DROP FUNCTION IF EXISTS slugify(TEXT, TEXT);
CREATE FUNCTION slugify(value TEXT, sep TEXT) RETURNS TEXT AS 
$$ 
  BEGIN CREATE EXTENSION IF NOT EXISTS "unaccent";
  RETURN trim(
    both sep
    from
      regexp_replace(
        lower(unaccent(value)),
        '[^a-z0-9\\-]+',
        sep,
        'gi' -- global insensitive
      )
  );
  END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS slugify(TEXT);
CREATE FUNCTION slugify(value TEXT) RETURNS TEXT AS 
$$ BEGIN RETURN slugify(value, '-');
  END;
$$ LANGUAGE plpgsql;

CREATE TABLE "user" (
  id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  hashed_password TEXT NOT NULL,
  username TEXT NOT NULL,
  created_at timestamptz NOT NULL DEFAULT (now()),
  updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "garden" (
  id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "user_id" int REFERENCES "user" (id) NOT NULL,
  name TEXT NOT NULL,
  created_at timestamptz NOT NULL DEFAULT (now()),
  updated_at timestamptz NOT NULL DEFAULT (now())
);
CREATE TABLE "species" (
  id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  image_url TEXT,
  color TEXT DEFAULT '#ffffff00',
  description TEXT,
  created_at timestamptz NOT NULL DEFAULT (now()),
  updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "event_type" (
  id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT (now()),
  updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "event" (
  id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  species_id int REFERENCES "species" (id) NOT NULL,
  event_type_id int REFERENCES "event_type" (id) NOT NULL,
  from_date TIMESTAMPTZ NOT NULL,
  until_date TIMESTAMPTZ NOT NULL,
  created_at timestamptz NOT NULL DEFAULT (now()),
  updated_at timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "garden_species" (
  id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  garden_id INT NOT NULL REFERENCES "garden" (id) NOT NULL,
  species_id INT NOT NULL REFERENCES "species" (id) NOT NULL,
  UNIQUE (garden_id, species_id)
);

CREATE TABLE "agribalyse" (
  -- id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  -- name_fr TEXT NOT NULL,
  -- LCI_name TEXT NOT NULL,
  -- subcategory TEXT NOT NULL,
  -- category TEXT NOT NULL,
  -- co2_unit DOUBLE PRECISION NOT NULL,
  -- co2_total DOUBLE PRECISION NOT NULL,
  -- co2_agriculture_share DOUBLE PRECISION NOT NULL,
  -- co2_transformation_share DOUBLE PRECISION NOT NULL,
  -- co2_packaging_share DOUBLE PRECISION NOT NULL,
  -- co2_transport_share DOUBLE PRECISION NOT NULL,
  -- co2_distribution_share DOUBLE PRECISION NOT NULL,
  -- co2_consumption_share DOUBLE PRECISION NOT NULL,
  -- plane BOOLEAN NOT NULL

  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nom_francais TEXT NOT NULL,
  LCI_name TEXT NOT NULL,
  groupe TEXT NOT NULL,
  sous_groupe TEXT NOT NULL,
  co2 json
  
);

COMMIT;