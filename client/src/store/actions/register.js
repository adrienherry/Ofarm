export const SET_REGISTER_FIELD = 'SET_LOGIN_FIELD';

export const setRegisterField = (value, name) => (
  {
    type: SET_REGISTER_FIELD,
    value,
    name,
  }
);

export const SEND_REGISTER_FORM = 'SEND_REGISTER_FORM';

export const sendRegisterForm = () => (
  {
    type: SEND_REGISTER_FORM,
  }
);

export const SET_IS_CONFIRMED_TO_FALSE = 'SET_IS_CONFIRMED_TO_FALSE';

export const setIsConfirmedToFalse = () => (
  {
    type: SET_IS_CONFIRMED_TO_FALSE,
  }
);

export const SET_IS_CONFIRMED_TO_TRUE = 'SET_IS_CONFIRMED_TO_TRUE';

export const setIsConfirmedToTrue = () => (
  {
    type: SET_IS_CONFIRMED_TO_TRUE,
  }
);

export const SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_FALSE = 'SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_FALSE';

export const setIsReadyToRedirectToLoginToFalse = () => (
  {
    type: SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_FALSE,
  }
);

export const SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_TRUE = 'SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_TRUE';

export const setIsReadyToRedirectToLoginToTrue = () => (
  {
    type: SET_IS_READY_TO_REDIRECT_TO_LOGIN_TO_TRUE,
  }
);

export const RESET_REGISTER_INFO = 'RESET_REGISTER_INFO';

export const resetRegisterInfo = () => (
  {
    type: RESET_REGISTER_INFO,
  }
);

export const SET_ERROR_EMAIL_REGISTER = 'SET_ERROR_EMAIL_REGISTER';

export const setErrorEmailRegister = () => (
  {
    type: SET_ERROR_EMAIL_REGISTER,
  }
);

export const RESET_ERROR_EMAIL_REGISTER = 'RESET_ERROR_EMAIL_REGISTER';

export const resetErrorEmailRegister = () => (
  {
    type: RESET_ERROR_EMAIL_REGISTER,
  }
);

export const SET_EMPTY_REGISTER_FIELD = 'SET_EMPTY_REGISTER_FIELD';

export const setEmptyRegisterField = () => (
  {
    type: SET_EMPTY_REGISTER_FIELD,
  }
);

export const RESET_EMPTY_REGISTER_FIELD = 'RESET_EMPTY_REGISTER_FIELD';

export const resetEmptyRegisterField = () => (
  {
    type: RESET_EMPTY_REGISTER_FIELD,
  }
);

export const SET_READY_TO_SEND_TO_TRUE = 'SET_READY_TO_SEND_TO_TRUE';

export const setReadyToSendToTrue = () => (
  {
    type: SET_READY_TO_SEND_TO_TRUE,
  }
);

export const SET_READY_TO_SEND_TO_FALSE = 'SET_READY_TO_SEND_TO_FALSE';

export const setReadyToSendToFalse = () => (
  {
    type: SET_READY_TO_SEND_TO_FALSE,
  }
);
