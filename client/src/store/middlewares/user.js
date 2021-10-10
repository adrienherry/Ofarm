import { axiosInstance } from '../../services/axios';
import {
  addProfil, fetchUserInfo, FETCH_USER_INFO, setUserInfo, UPDATE_PROFIL_INFO,
} from '../actions/profil';
import { setNewUsernameSlug } from '../actions/user';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      try {
        const { user: { token } } = store.getState();
        const response = await axiosInstance.get('/user', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        store.dispatch(setUserInfo(response.data));
      }
      catch (error) {
        console.log(error);
      }
      next(action);
      break;
    case UPDATE_PROFIL_INFO:
      try {
        const { user: { token } } = store.getState();
        const { profil: { usernameProfil, emailProfil } } = store.getState();
        const response = await axiosInstance.patch('/user', {
          username: usernameProfil,
          email: emailProfil,
        }, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        // localStorage.setItem('username', response.data.username);
        // localStorage.setItem('usernameSlug', response.data.usernameSlug);
        // localStorage.setItem('email', response.data.email);
        store.dispatch(fetchUserInfo());
      }
      catch (error) {
        console.log(error);
      }

      next(action);
      break;
    default:
      next(action);
  }
};
