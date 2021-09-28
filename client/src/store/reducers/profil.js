import {
  ADD_PROFIL,
  SET_PROFIL_FIELD,
  SET_USER_INFO,
} from '../actions/profil';

const initialState = {
  usernameProfil: '',
  emailProfil: '',
  creationDate: '',
  updatedDate: '',
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
    default:
      return state;
  }
};

export default profilReducer;
