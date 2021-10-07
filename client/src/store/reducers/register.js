import {
  RESET_REGISTER_INFO,
  SET_ERROR_EMAIL_REGISTER,
  RESET_ERROR_EMAIL_REGISTER,
  SET_IS_CONFIRMED_TO_FALSE,
  SET_IS_CONFIRMED_TO_TRUE,
  SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_FALSE,
  SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_TRUE,
  SET_REGISTER_FIELD,
  SET_EMPTY_REGISTER_FIELD,
  RESET_EMPTY_REGISTER_FIELD,
  SET_READY_TO_SEND_TO_FALSE,
  SET_READY_TO_SEND_TO_TRUE,
} from '../actions/register';

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  isConfirmed: true,
  isReadyToRedirectToLogin: false,
  errorEmail: '',
  emptyField: '',
  readyToSend: false,
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
    case SET_ERROR_EMAIL_REGISTER:
      return {
        ...state,
        errorEmail: "L'email n'est pas valide",
      };
    case RESET_ERROR_EMAIL_REGISTER:
      return {
        ...state,
        errorEmail: '',
      };
    case SET_EMPTY_REGISTER_FIELD:
      return {
        ...state,
        emptyField: 'Veuillez remplir tous les champs',
      };
    case RESET_EMPTY_REGISTER_FIELD:
      return {
        ...state,
        emptyField: '',
      };
    case SET_READY_TO_SEND_TO_FALSE:
      return {
        ...state,
        readyToSend: false,
      };
    case SET_READY_TO_SEND_TO_TRUE:
      return {
        ...state,
        readyToSend: true,
      };
    default:
      return state;
  }
};

export default RegisterReducer;
