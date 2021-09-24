export const SET_LOGIN_FIELD = 'SET_LOGIN_FIELD';

export const setLoginField = (value, name) => (
  {
    type: SET_LOGIN_FIELD,
    value,
    name,
  }
);
