import { SET_GARDEN_NAME, SET_SPECIES_CHOOSEN_LIST } from '../actions/createGarden';
import { SET_SPECIES_LIST, SET_LOADING_SPECIES_TO_FALSE, SET_LOADING_SPECIES_TO_TRUE } from '../actions/species';

const initialState = {
  gardenName: '',
  speciesList: [],
  loading: true,
  speciesChoosenList: [],
};

const createGardenReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_GARDEN_NAME:
      return {
        ...state,
        [action.name]: action.value,
      };
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
    case SET_SPECIES_CHOOSEN_LIST:
      return {
        ...state,
        speciesChoosenList: [...state.speciesChoosenList, { name: action.name, id: action.id }],
      };
    default:
      return state;
  }
};

export default createGardenReducer;
