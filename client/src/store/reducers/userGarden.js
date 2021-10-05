import {
  SET_EVENTS,
  SET_SELECTED_EVENT_TYPE,
  SET_SELECTED_SPECIES,
  SET_USER_GARDEN,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_MODAL_DATE,
  SET_MODAL_EVENTS,
} from '../actions/gardens';

const initialState = {
  garden: null,
  selectedSpecies: '',
  selectedEventType: 'Tous',
  events: [],
  isModalOpen: false,
  modalEvents: null,
  modalDate: null,
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
    default:
      return state;
  }
};

export default userGardenReducer;
