export const OPEN_USER_MENU = 'OPEN_USER_MENU';

export const openUserMenu = () => (
  {
    type: OPEN_USER_MENU,
  }
);

export const COLLAPSE_USER_MENU = 'COLLAPSE_USER_MENU';

export const collapseUserMenu = () => (
  {
    type: COLLAPSE_USER_MENU,
  }
);

export const SET_USER_INFO = 'SET_USER_INFO';

export const setUserInfo = (payload) => (
  {
    type: SET_USER_INFO,
    payload,
  }
);
