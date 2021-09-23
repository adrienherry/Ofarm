import { COLLAPSE_USER_MENU, OPEN_USER_MENU } from '../actions/user';

const initialState = {
  userMenuIsOpen: false,
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
    default:
      return state;
  }
};

export default UserReducer;
