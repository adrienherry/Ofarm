import {
  PROFIL_USERNAME,
  PROFIL_NAME,
  PROFIL_EMAIL,
  PROFIL_PASSWORD,
  ADD_PROFIL,
} from "../actions/profil";

const initialState = {
  username: "",
  name: "",
  email: "",
  password: "",
};

const profilReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PROFIL_USERNAME:
      return {
        ...state,
        username: action.value,
      };
    case PROFIL_NAME:
      return {
        ...state,
        name: action.value,
      };
    case PROFIL_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case PROFIL_PASSWORD:
      return {
        ...state,
        password: action.value,
      };
    case ADD_PROFIL:
      return {
        ...state,
        // value: action.value,
      };
    default:
      return state;
  }
};

export default profilReducer;
