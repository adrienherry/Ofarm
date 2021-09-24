import {
  ADD_FORM,
  SET_REGISTER_FIELD,
} from '../actions/register';

const initialState = {
  username: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
};

const RegisterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_REGISTER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case ADD_FORM:
      return {
        ...state,
        username: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      };

    default:
      return state;
  }
};

export default RegisterReducer;
