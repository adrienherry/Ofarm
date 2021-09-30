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

export const IS_CONNECTED = 'IS_CONNECTED';

export const isConnected = () => (
  {
    type: IS_CONNECTED,
  }
);

export const SET_IS_READY_TO_REDIRECT_TO_FALSE = 'SET_IS_READY_TO_REDIRECT_TO_FALSE';

export const setIsReadyToRedirectToFalse = () => (
  {
    type: SET_IS_READY_TO_REDIRECT_TO_FALSE,
  }
);

export const SET_IS_READY_TO_REDIRECT_TO_TRUE = 'SET_IS_READY_TO_REDIRECT_TO_TRUE';

export const setIsReadyToRedirectToTrue = () => (
  {
    type: SET_IS_READY_TO_REDIRECT_TO_TRUE,
  }
);

export const SET_LOGGED_TO_FALSE = 'SET_LOGGED_TO_FALSE';

export const setLoggedToFalse = () => (
  {
    type: SET_LOGGED_TO_FALSE,
  }
);
