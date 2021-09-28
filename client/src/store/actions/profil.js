export const SET_PROFIL_FIELD = 'SET_PROFIL_FIELD';

export const setProfilField = (value, name) => ({
  type: SET_PROFIL_FIELD,
  value,
  name,
});

export const ADD_PROFIL = 'ADD_PROFIL';

export const addProfil = (value) => ({
  type: ADD_PROFIL,
  value,
});

export const FETCH_USER_INFO = 'FETCH_USER_INFO';

export const fetchUserInfo = () => (
  {
    type: FETCH_USER_INFO,
  }
);

export const SET_USER_INFO = 'SET_USER_INFO';

export const setUserInfo = (payload) => (
  {
    type: SET_USER_INFO,
    payload,
  }
);
