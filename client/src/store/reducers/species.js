import { SET_LOADING_SPECIES_TO_FALSE, SET_LOADING_SPECIES_TO_TRUE, SET_SPECIES_LIST } from '../actions/species';

const initialState = {
  speciesList: [],
  loading: 'true',
};

const speciesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SPECIES_LIST:
      return {
        ...state,
        speciesList: action.payload,
      };
    case SET_LOADING_SPECIES_TO_FALSE:
      return {
        ...state,
        loading: false,
      };
    case SET_LOADING_SPECIES_TO_TRUE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default speciesReducer;
