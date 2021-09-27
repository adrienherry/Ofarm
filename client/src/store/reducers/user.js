import { SET_USER_INFO, COLLAPSE_USER_MENU, OPEN_USER_MENU } from '../actions/user';

const initialState = {
  userMenuIsOpen: false,
  username: '',
};

const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_USER_MENU:
      return {
        ...state,
        userMenuIsOpen: true,
      };
    case COLLAPSE_USER_MENU:
      return {
        ...state,
        userMenuIsOpen: false,
      };
    case SET_USER_INFO:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};

export default UserReducer;
