import {
  ADD_PROFIL,
  SET_USER_INFO,
  SET_USER_DISABLED,
  SET_USER_DISABLED2,
  SET_USER_ENABLED,
  SET_USERNAME_PROFIL,
  SET_EMAIL_PROFIL,
  SET_USER_ENABLED2,
} from '../actions/profil';

const initialState = {
  usernameProfil: '',
  emailProfil: '',
  creationDate: '',
  updatedDate: '',
  disabled: true,
  disabled2: true,
};

const profilReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    case SET_USER_DISABLED2:
      return {
        ...state,
        disabled2: false,
      };
    case SET_USER_ENABLED:
      return {
        ...state,
        disabled: true,
      };
    case SET_USER_ENABLED2:
      return {
        ...state,
        disabled2: true,
      };
    case SET_USERNAME_PROFIL:
      return {
        ...state,
        usernameProfil: action.value,
      };
    case SET_EMAIL_PROFIL:
      return {
        ...state,
        emailProfil: action.value,
      };
    default:
      return state;
  }
};

export default profilReducer;
