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
