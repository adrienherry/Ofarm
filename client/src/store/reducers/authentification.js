import { SET_LOGIN_FIELD } from '../actions/authentification';

const initialState = {
  logged: false,
  emailLogin: '',
  passwordLogin: '',
};

const authentificationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default authentificationReducer;
