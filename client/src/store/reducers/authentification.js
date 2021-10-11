import {
  RESET_ERROR_LOGIN,
  SET_ERROR_LOGIN,
  SET_LOGGED_TO_FALSE,
  SET_LOGGED_TO_TRUE, SET_LOGIN_FIELD, SET_READY_TO_REDIRECT_LOGIN,
  RESET_READY_TO_REDIRECT_LOGIN,
  RESET_LOGIN_FORM,
} from '../actions/authentification';

const initialState = {
  logged: false,
  emailLogin: '',
  passwordLogin: '',
  errorLogin: '',
  readyToRedirect: false,
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
    case SET_ERROR_LOGIN:
      return {
        ...state,
        errorLogin: 'Email ou mot de passe incorrect',
      };
    case RESET_ERROR_LOGIN:
      return {
        ...state,
        errorLogin: '',
      };
    case SET_READY_TO_REDIRECT_LOGIN:
      return {
        ...state,
        readyToRedirect: true,
      };
    case RESET_READY_TO_REDIRECT_LOGIN:
      return {
        ...state,
        readyToRedirect: false,
      };
    case RESET_LOGIN_FORM:
      return {
        ...state,
        emailLogin: '',
        passwordLogin: '',
        errorLogin: '',
      };
    default:
      return state;
  }
};

export default authentificationReducer;
