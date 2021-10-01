import { axiosInstance } from '../../services/axios';
import {
  addProfil, fetchUserInfo, FETCH_USER_INFO, setUserInfo, UPDATE_PROFIL_INFO,
} from '../actions/profil';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      try {
        const response = await axiosInstance.get('/user');
        store.dispatch(setUserInfo(response.data));
      }
      catch (error) {
        console.log(error);
      }
      next(action);
      break;
    case UPDATE_PROFIL_INFO:
      try {
        const { profil: { usernameProfil, emailProfil } } = store.getState();
        const response = await axiosInstance.patch('/user', {
          username: usernameProfil,
          email: emailProfil,
        });
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
