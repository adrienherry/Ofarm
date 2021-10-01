import {
  SET_LOGGED_TO_FALSE,
  SET_LOGGED_TO_TRUE, SET_LOGIN_FIELD,
} from '../actions/authentification';

const initialState = {
  logged: false,
  emailLogin: '',
  passwordLogin: '',
};

const authentificationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_LOGGED_TO_TRUE:
      return {
        ...state,
        logged: true,
        emailLogin: '',
        passwordLogin: '',
      };
    case SET_LOGGED_TO_FALSE:
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};

export default authentificationReducer;
