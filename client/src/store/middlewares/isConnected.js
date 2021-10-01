import { axiosInstance } from '../../services/axios';
import { IS_CONNECTED, setLoggedToTrue } from '../actions/authentification';
import { setUserInfo } from '../actions/user';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case IS_CONNECTED:
      try {
        const response = await axiosInstance.get('/user');
        store.dispatch(setLoggedToTrue());
        store.dispatch(setUserInfo({
          username: response.data.username,
          usernameSlug: response.data.usernameSlug,
        }));
        console.log(response.data);
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
