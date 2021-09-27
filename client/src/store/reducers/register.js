import {
  SET_IS_CONFIRMED_TO_FALSE,
  SET_REGISTER_FIELD,
} from '../actions/register';

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  isConfirmed: true,
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
    default:
      return state;
  }
};

export default RegisterReducer;
