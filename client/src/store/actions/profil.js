export const SET_PROFIL_FIELD = 'SET_PROFIL_FIELD';

export const setProfilField = (value, name) => ({
  type: SET_PROFIL_FIELD,
  value,
  name,
});

export const ADD_PROFIL = 'ADD_PROFIL';

export const addProfil = (payload) => ({
  type: ADD_PROFIL,
  payload,
});

export const FETCH_USER_INFO = 'FETCH_USER_INFO';

export const fetchUserInfo = () => ({
  type: FETCH_USER_INFO,
});

export const SET_USER_INFO = 'SET_USER_INFO';

export const setUserInfo = (payload) => ({
  type: SET_USER_INFO,
  payload,
});

export const SET_USER_DISABLED = 'SET_USER_DISABLED';

export const setUserDisabled = () => ({
  type: SET_USER_DISABLED,
});

export const SET_USER_DISABLED2 = 'SET_USER_DISABLED2';

export const setUserDisabled2 = () => ({
  type: SET_USER_DISABLED2,
});

export const SET_USER_ENABLED = 'SET_USER_ENABLED';

export const setUserEnabled = () => ({
  type: SET_USER_ENABLED,
});

export const SET_USER_ENABLED2 = 'SET_USER_ENABLED2';

export const setUserEnabled2 = () => ({
  type: SET_USER_ENABLED2,
});

export const SET_USERNAME_PROFIL = 'SET_USERNAME_PROFIL';

export const setUsernameProfil = (value) => (
  {
    type: SET_USERNAME_PROFIL,
    value,
  }
);

export const SET_EMAIL_PROFIL = 'SET_EMAIL_PROFIL';

export const setEmailProfil = (value) => (
  {
    type: SET_EMAIL_PROFIL,
    value,
  }
);

export const UPDATE_PROFIL_INFO = 'UPDATE_PROFIL_INFO';

export const updateProfilInfo = () => (
  {
    type: UPDATE_PROFIL_INFO,
  }
);
