import {
  ADD_PROFIL,
  SET_PROFIL_FIELD,
  SET_USER_INFO,
  SET_USER_DISABLED,
  SET_USER_ENABLED,
} from "../actions/profil";

const initialState = {
  usernameProfil: "",
  emailProfil: "",
  creationDate: "",
  updatedDate: "",
  disabled: true,
};

const profilReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PROFIL_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case ADD_PROFIL:
      return {
        ...state,
        // value: action.value,
      };
    case SET_USER_INFO:
      return {
        ...state,
        usernameProfil: action.payload.username,
        emailProfil: action.payload.email,
        creationDate: action.payload.createdAt,
        updatedDate: action.payload.updatedAt,
      };
    case SET_USER_DISABLED:
      return {
        ...state,
        disabled: false,
      };
    case SET_USER_ENABLED:
      return {
        ...state,
        disable: true,
      };
    default:
      return state;
  }
};

export default profilReducer;
