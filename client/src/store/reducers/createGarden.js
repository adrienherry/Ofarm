import {
  RESET_GARDEN_INFO,
  SET_CREATE_GARDEN_ERROR,
  SET_ERROR_NO_NAME,
  SET_GARDEN_NAME,
  SET_NEW_SPECIES_CHOOSEN_LIST,
  SET_READY_TO_REDIRECT_TO_FALSE,
  SET_READY_TO_REDIRECT_TO_TRUE,
  SET_SPECIES_CHOOSEN_LIST,
} from '../actions/createGarden';
import { SET_SPECIES_LIST, SET_LOADING_SPECIES_TO_FALSE, SET_LOADING_SPECIES_TO_TRUE } from '../actions/species';

const initialState = {
  gardenName: '',
  speciesList: [],
  loading: true,
  speciesChoosenList: [],
  error: '',
  readyToRedirect: false,
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
    case SET_NEW_SPECIES_CHOOSEN_LIST:
      return {
        ...state,
        speciesChoosenList: action.speciesChoosenList,
      };
    case RESET_GARDEN_INFO:
      return {
        ...state,
        gardenName: '',
        speciesChoosenList: [],
        error: '',
      };
    case SET_CREATE_GARDEN_ERROR:
      return {
        ...state,
        error: 'Vous avez déjà un jardin avec le même nom',
      };
    case SET_ERROR_NO_NAME:
      return {
        ...state,
        error: 'Veuillez rentrer un nom à votre jardin',
      };
    case SET_READY_TO_REDIRECT_TO_FALSE:
      return {
        ...state,
        readyToRedirect: false,
      };
    case SET_READY_TO_REDIRECT_TO_TRUE:
      return {
        ...state,
        readyToRedirect: true,
      };
    default:
      return state;
  }
};

export default createGardenReducer;
