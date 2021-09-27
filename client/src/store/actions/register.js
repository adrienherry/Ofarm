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
