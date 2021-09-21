BEGIN;
INSERT INTO
  "user" (username, email, hashed_password)
VALUES
  (
    'florian_nguyen',
    'florian.nguyen@email.com',
    'password'
  ),
  (
    'nicolas_leonardon',
    'leonardon.nicolas@gmail.com',
    'password'
  ),
  ('bob', 'bobgarden@email.com', 'password');
INSERT INTO
  "species" (name)
VALUES
  ('Aubergine'),
  ('Betterave'),
  ('Carotte'),
  ('Céleri Rave');
INSERT INTO
  "event_type" (name)
VALUES
  ('Semis sous abri'),
  ('Semis en pleine terre'),
  ('Repiquage'),
  ('Récolte');
INSERT INTO
  "event" (event_type_id, species_id, from_date, until_date)
VALUES
  -- 1- ('Aubergine'),
  (1, 1, '01-02-2000', '01-05-2000'),
  (
    2,
    1,
    '01-04-2000',
    '01-06-2000'
  ),
  (3, 1, '01-04-2000', '01-07-2000'),
  (4, 1, '01-07-2000', '01-11-2000'),
  -- 2- ('Betterave'),
  (
    2,
    2,
    '01-03-2000',
    '01-08-2000'
  ),
  (4, 2, '01-07-2000', '01-11-2000'),
  -- 3-('Carotte'),
  (1, 3, '01-02-2000', '01-04-2000'),
  (
    2,
    3,
    '01-03-2000',
    '01-08-2000'
  ),
  (4, 3, '01-06-2000', '01-12-2000'),
  -- 4-('Céleri Rave'),
  (1, 4, '01-02-2000', '01-04-2000'),
  (
    2,
    4,
    '01-04-2000',
    '01-06-2000'
  ),
  (3, 4, '01-04-2000', '01-06-2000'),
  (4, 4, '01-09-2000', '01-12-2000');
INSERT INTO
  "garden" (name, user_id)
VALUES
  ('Premier jardin de Florian', 1),
  ('Deuxième jardin de Florian', 1),
  ('Troisième jardin de Florian', 1),
  ('Le fabuleux jardin de Bob', 3),
  ('Premier jardin de Nicolas', 2);
INSERT INTO
  "garden_species" (garden_id, species_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (2, 2),
  (2, 3),
  (3, 4),
  (3, 2),
  (3, 1),
  (3, 3),
  (5, 2),
  (5, 4);
COMMIT;