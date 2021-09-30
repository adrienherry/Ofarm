import { SET_IS_READY_TO_REDIRECT_TO_FALSE, SET_LOGGED_TO_TRUE, SET_LOGIN_FIELD } from '../actions/authentification';

const initialState = {
  logged: false,
  emailLogin: '',
  passwordLogin: '',
  isReadyToRedirect: false,
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
        isReadyToRedirect: true,
      };
    case SET_IS_READY_TO_REDIRECT_TO_FALSE:
      return {
        ...state,
        isReadyToRedirect: false,
      };
    default:
      return state;
  }
};

export default authentificationReducer;
