export const SET_LOGIN_FIELD = 'SET_LOGIN_FIELD';

export const setLoginField = (value, name) => (
  {
    type: SET_LOGIN_FIELD,
    value,
    name,
  }
);

export const SEND_LOGIN_FORM = 'SEND_LOGIN_FORM';

export const sendLoginForm = () => (
  {
    type: SEND_LOGIN_FORM,
  }
);

export const SET_LOGGED_TO_TRUE = 'SET_LOGGED_TO_TRUE';

export const setLoggedToTrue = () => (
  {
    type: SET_LOGGED_TO_TRUE,
  }
);

export const SET_LOGGED_TO_FALSE = 'SET_LOGGED_TO_FALSE';

export const setLoggedToFalse = () => (
  {
    type: SET_LOGGED_TO_FALSE,
  }
);

export const IS_CONNECTED = 'IS_CONNECTED';

export const isConnected = () => (
  {
    type: IS_CONNECTED,
  }
);

export const SET_ERROR_LOGIN = 'SET_ERROR_LOGIN';

export const setErrorLogin = () => (
  {
    type: SET_ERROR_LOGIN,
  }
);

export const RESET_ERROR_LOGIN = 'RESET_ERROR_LOGIN';

export const resetErrorLogin = () => (
  {
    type: RESET_ERROR_LOGIN,
  }
);

export const SET_READY_TO_REDIRECT_LOGIN = 'SET_READY_TO_REDIRECT_LOGIN';

export const setReadyToRedirectLogin = () => (
  {
    type: SET_READY_TO_REDIRECT_LOGIN,
  }
);

export const RESET_READY_TO_REDIRECT_LOGIN = 'RESET_READY_TO_REDIRECT_LOGIN';

export const resetReadyToRedirectLogin = () => (
  {
    type: RESET_READY_TO_REDIRECT_LOGIN,
  }
);
