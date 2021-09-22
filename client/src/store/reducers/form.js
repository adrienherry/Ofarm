import {
  ADD_FORM,
  SET_CONFIRM_EMAIL,
  SET_CONFIRM_PASSWORD,
  SET_EMAIL,
  SET_PASSWORD,
  SET_USERNAME,
} from "../actions/form";

const initialState = {
  username: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.value,
      };

    case SET_EMAIL:
      return {
        ...state,
        email: action.value,
      };

    case SET_CONFIRM_EMAIL:
      return {
        ...state,
        confirmEmail: action.value,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.value,
      };

    case SET_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.value,
      };

    case ADD_FORM:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
