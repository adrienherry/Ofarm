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

export const CREATE_GARDEN = 'CREATE_GARDEN';

export const createGarden = () => (
  {
    type: CREATE_GARDEN,
  }
);

export const RESET_GARDEN_INFO = 'RESET_GARDEN_INFO';

export const resetGardenInfo = () => (
  {
    type: RESET_GARDEN_INFO,
  }
);

export const SET_CREATE_GARDEN_ERROR = 'SET_CREATE_GARDEN_ERROR';

export const setCreateGardenError = () => (
  {
    type: SET_CREATE_GARDEN_ERROR,
  }
);

export const SET_ERROR_NO_NAME = 'SET_ERROR_NO_NAME';

export const setErrorNoName = () => (
  {
    type: SET_ERROR_NO_NAME,
  }
);

export const SET_READY_TO_REDIRECT_TO_TRUE = 'SET_READY_TO_REDIRECT_TO_TRUE';

export const setReadyToRedirectToTrue = () => (
  {
    type: SET_READY_TO_REDIRECT_TO_TRUE,
  }
);

export const SET_READY_TO_REDIRECT_TO_FALSE = 'SET_READY_TO_REDIRECT_TO_FALSE';

export const setReadyToRedirectToFalse = () => (
  {
    type: SET_READY_TO_REDIRECT_TO_FALSE,
  }
);
