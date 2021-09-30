import {
  RESET_REGISTER_INFO,
  SET_IS_CONFIRMED_TO_FALSE,
  SET_IS_CONFIRMED_TO_TRUE,
  SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_FALSE,
  SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_TRUE,
  SET_REGISTER_FIELD,
} from '../actions/register';

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  isConfirmed: true,
  isReadyToRedirectToLogin: false,
};

const RegisterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_REGISTER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_IS_CONFIRMED_TO_FALSE:
      return {
        ...state,
        isConfirmed: false,
      };
    case SET_IS_CONFIRMED_TO_TRUE:
      return {
        ...state,
        isConfirmed: true,
      };
    case RESET_REGISTER_INFO:
      return {
        ...state,
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    case SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_TRUE:
      return {
        ...state,
        isReadyToRedirectToLogin: true,
      };
    case SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_FALSE:
      return {
        ...state,
        isReadyToRedirectToLogin: false,
      };
    default:
      return state;
  }
};

export default RegisterReducer;
