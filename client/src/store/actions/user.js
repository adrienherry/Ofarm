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

export const SET_USER_TOKEN = 'SET_USER_TOKEN';

export const setUserToken = (token) => (
  {
    type: SET_USER_TOKEN,
    token,
  }
);

export const SET_NEW_USERNAMESLUG = 'SET_NEW_USERNAMESLUG';

export const setNewUsernameSlug = (slug) => (
  {
    type: SET_NEW_USERNAMESLUG,
    slug,
  }
);
