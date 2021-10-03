import {
  SET_EVENTS, SET_SELECTED_EVENT_TYPE, SET_SELECTED_SPECIES, SET_USER_GARDEN,
} from '../actions/gardens';

const initialState = {
  garden: null,
  selectedSpecies: 'Tous',
  selectedEventType: 'Tous',
  events: [],
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
    default:
      return state;
  }
};

export default userGardenReducer;
