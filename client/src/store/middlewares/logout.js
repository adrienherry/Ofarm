import { axiosInstance } from '../../services/axios';
import { setLoggedToFalse } from '../actions/authentification';
import { LOGOUT } from '../actions/logout';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case LOGOUT:
      try {
        const { user: { token } } = store.getState();
        const response = axiosInstance.get('/logout', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.clear();
        store.dispatch(setLoggedToFalse());
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
