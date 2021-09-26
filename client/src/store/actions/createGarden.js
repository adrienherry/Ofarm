export const SET_GARDEN_NAME = 'SET_GARDEN_NAME';

export const setGardenName = (value, name) => (
  {
    type: SET_GARDEN_NAME,
    value,
    name,
  }
);

export const SET_SPECIES_CHOOSEN_LIST = 'SET_SPECIES_CHOOSEN_LIST';

export const setSpeciesChoosenList = (name, id) => (
  {
    type: SET_SPECIES_CHOOSEN_LIST,
    name,
    id,
  }
);

export const SET_NEW_SPECIES_CHOOSEN_LIST = 'SET_NEW_SPECIES_CHOOSEN_LIST';

export const setNewSpeciesChoosenList = (speciesChoosenList) => (
  {
    type: SET_NEW_SPECIES_CHOOSEN_LIST,
    speciesChoosenList,
  }
);
