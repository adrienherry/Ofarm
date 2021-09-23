export const SET_REGISTER_FIELD = 'SET_LOGIN_FIELD';

export const setRegisterField = (value, name) => (
  {
    type: SET_REGISTER_FIELD,
    value,
    name,
  }
);

export const ADD_FORM = 'ADD_FORM';

export const addForm = (value) => ({
  type: ADD_FORM,
  value,
});
