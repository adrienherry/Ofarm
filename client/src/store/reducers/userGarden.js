import {
  SET_EVENTS,
  SET_SELECTED_EVENT_TYPE,
  SET_SELECTED_SPECIES,
  SET_USER_GARDEN,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_MODAL_DATE,
  SET_MODAL_EVENTS,
  SET_SELECTED_SPECIES_TO_ADD,
  SET_ERROR_ADD_SPECIES,
  RESET_ERROR_ADD_SPECIES,
  SET_SPECIES_TO_GARDEN,
  SET_NEW_GARDEN,
  SET_READY_TO_ADD_TO_TRUE,
  SET_READY_TO_ADD_TO_FALSE,
  SET_SELECTED_SPECIES_LIST,
  SET_NEW_SELECTED_SPECIES_LIST,
  SET_SELECTED_SPECIES_FORM,
  SET_DATE_FORM_HARVEST,
  SET_QUANTITY_FORM_HARVEST,
  SET_COMMENT_FORM_HARVEST,
  SET_ERROR_FORM_HARVEST,
  RESET_ERROR_FORM_HARVEST,
  RESET_HARVEST,
} from '../actions/gardens';

const initialState = {
  garden: null,
  selectedSpecies: '',
  selectedEventType: 'Tous',
  selectedSpeciesToAdd: 'Artichaut',
  errorAddSpecies: '',
  events: [],
  isModalOpen: false,
  modalEvents: null,
  modalDate: null,
  readyToAdd: false,
  selectedSpeciesList: [],
  selectedSpeciesFormHarvest: '',
  selectedDateFormHarvest: '',
  selectedQuantityFormHarvest: '',
  selectedCommentFormHarvest: '',
  errorFormHarvest: '',
};

const userGardenReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_GARDEN:
      return {
        ...state,
        garden: action.garden,
      };
    case SET_SELECTED_SPECIES:
      return {
        ...state,
        selectedSpecies: action.value,
      };
    case SET_SELECTED_EVENT_TYPE:
      return {
        ...state,
        selectedEventType: action.value,
      };
    case SET_EVENTS:
      return {
        ...state,
        events: action.events,
      };
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case SET_MODAL_DATE:
      return {
        ...state,
        modalDate: action.date,
      };
    case SET_MODAL_EVENTS:
      return {
        ...state,
        modalEvents: action.events,
      };
    case SET_SELECTED_SPECIES_TO_ADD:
      return {
        ...state,
        selectedSpeciesToAdd: action.value,
      };
    case SET_ERROR_ADD_SPECIES:
      return {
        ...state,
        errorAddSpecies: "L'espèce est déjà présente dans votre jardin",
      };
    case RESET_ERROR_ADD_SPECIES:
      return {
        ...state,
        errorAddSpecies: '',
      };
    case SET_NEW_GARDEN:
      return {
        ...state,
        garden: action.garden,
      };
    case SET_READY_TO_ADD_TO_TRUE:
      return {
        ...state,
        readyToAdd: true,
      };
    case SET_READY_TO_ADD_TO_FALSE:
      return {
        ...state,
        readyToAdd: false,
      };
    case SET_SELECTED_SPECIES_LIST:
      return {
        ...state,
        selectedSpeciesList: action.speciesList,
      };
    case SET_SELECTED_SPECIES_FORM:
      return {
        ...state,
        selectedSpeciesFormHarvest: action.value,
      };
    case SET_DATE_FORM_HARVEST:
      return {
        ...state,
        selectedDateFormHarvest: action.date,
      };
    case SET_QUANTITY_FORM_HARVEST:
      return {
        ...state,
        selectedQuantityFormHarvest: action.quantity,
      };
    case SET_COMMENT_FORM_HARVEST:
      return {
        ...state,
        selectedCommentFormHarvest: action.comment,
      };
    case SET_ERROR_FORM_HARVEST:
      return {
        ...state,
        errorFormHarvest: 'Veuillez remplir les champs obligatoires',
      };
    case RESET_ERROR_FORM_HARVEST:
      return {
        ...state,
        errorFormHarvest: '',
      };
    case RESET_HARVEST:
      return {
        ...state,
        selectedSpeciesFormHarvest: '',
        selectedDateFormHarvest: '',
        selectedQuantityFormHarvest: '',
        selectedCommentFormHarvest: '',
      };
    default:
      return state;
  }
};

export default userGardenReducer;
