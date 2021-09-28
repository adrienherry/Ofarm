export const FETCH_SPECIES_LIST = 'FETCH_SPECIES_LIST';

export const fetchSpeciesList = () => (
  {
    type: FETCH_SPECIES_LIST,
  }
);

export const SET_SPECIES_LIST = 'SET_SPECIES_LIST';

export const setSpeciesList = (payload) => (
  {
    type: SET_SPECIES_LIST,
    payload,
  }
);

export const SET_LOADING_SPECIES_TO_FALSE = 'SET_LOADING_TO_FALSE';

export const setLoadingSpeciesToFalse = () => (
  {
    type: SET_LOADING_SPECIES_TO_FALSE,
  }
);

export const SET_LOADING_SPECIES_TO_TRUE = 'SET_LOADING_SPECIES_TO_TRUE';

export const setLoadingSpeciesToTrue = () => (
  {
    type: SET_LOADING_SPECIES_TO_TRUE,
  }
);

export const FETCH_ONE_SPECIES = 'FETCH_ONE_SPECIES';

export const fetchOneSpecies = (id) => (
  {
    type: FETCH_ONE_SPECIES,
    id,
  }
);

export const SET_ONE_SPECIES = 'SET_ONE_SPECIES';

export const setOneSpecies = (payload) => (
  {
    type: SET_ONE_SPECIES,
    payload,
  }
);
