import { SET_IS_GARDENS_LOADING_TO_FALSE, SET_IS_GARDENS_LOADING_TO_TRUE, SET_USER_GARDENS } from '../actions/gardens';
import {
  SET_USER_INFO, COLLAPSE_USER_MENU, OPEN_USER_MENU, SET_USER_TOKEN, SET_NEW_USERNAMESLUG,
} from '../actions/user';

const initialState = {
  userMenuIsOpen: false,
  username: '',
  usernameSlug: '',
  gardens: [],
  isGardensLoading: false,
  token: '',
};

const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_USER_MENU:
      return {
        ...state,
        userMenuIsOpen: !state.userMenuIsOpen,
      };
    case COLLAPSE_USER_MENU:
      return {
        ...state,
        userMenuIsOpen: false,
      };
    case SET_USER_INFO:
      return {
        ...state,
        username: action.payload.username,
        usernameSlug: action.payload.usernameSlug,
      };
    case SET_USER_GARDENS:
      return {
        ...state,
        gardens: action.payload,
      };
    case SET_IS_GARDENS_LOADING_TO_FALSE:
      return {
        ...state,
        isGardensLoading: false,
      };
    case SET_IS_GARDENS_LOADING_TO_TRUE:
      return {
        ...state,
        isGardensLoading: true,
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default UserReducer;
