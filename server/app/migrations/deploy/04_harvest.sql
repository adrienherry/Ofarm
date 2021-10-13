-- Deploy ofarm:04_harvest to pg


-- Règle 1 : Chaque entité du MCD devient une table.
-- Règle 2 : Chaque relation 1:N entraine la création d'une clé étrangère à placer dans la table avec la plus petite cardinalité max.
-- Règle 3 : Chaque relation N:N entraine d'une nouvelle table de liaison.

BEGIN;

CREATE TABLE "harvest" (
   id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   species_id int REFERENCES "species" (id) ON DELETE CASCADE NOT NULL,
   garden_id int REFERENCES "garden" (id) ON DELETE CASCADE NOT NULL,
   quantity double precision NOT NULL,
   date date NOT NULL,
   comment text, 
   created_at timestamptz NOT NULL DEFAULT (now()),
   updated_at timestamptz NOT NULL DEFAULT (now())
);

COMMIT;
