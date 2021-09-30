import { axiosInstance } from '../../services/axios';
import { FETCH_USER_INFO, setUserInfo } from '../actions/profil';

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
    default:
      next(action);
  }
};
