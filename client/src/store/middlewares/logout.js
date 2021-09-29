import { axiosInstance } from '../../services/axios';
import { setLoggedToFalse } from '../actions/authentification';
import { LOGOUT } from '../actions/logout';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case LOGOUT:
      try {
        const response = axiosInstance.get('/logout');
        localStorage.removeItem('jwt');
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
