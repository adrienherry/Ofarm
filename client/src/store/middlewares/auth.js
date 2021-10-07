import { axiosInstance } from '../../services/axios';
import {
  IS_CONNECTED,
  resetErrorLogin,
  SEND_LOGIN_FORM, setErrorLogin, setLoggedToTrue, setReadyToRedirectLogin,
} from '../actions/authentification';
import { setUserInfo, setUserToken } from '../actions/user';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case SEND_LOGIN_FORM:
      try {
        const { auth: { emailLogin, passwordLogin } } = store.getState();
        const response = await axiosInstance.post('/login', {
          email: emailLogin,
          password: passwordLogin,
        });
        localStorage.setItem('jwt', response.data.token);
        store.dispatch(setUserToken(response.data.token));
        store.dispatch(setUserInfo({
          username: response.data.username,
          usernameSlug: response.data.usernameSlug,
          email: response.data.email,
        }));
        store.dispatch(setLoggedToTrue());
        store.dispatch(setReadyToRedirectLogin());
      }
      catch (error) {
        console.log('error:', error.response);
        store.dispatch(setErrorLogin());
      }
      next(action);
      break;
    case IS_CONNECTED:
      try {
        const { user: { token } } = store.getState();
        const response = await axiosInstance.get('/user', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        store.dispatch(setUserInfo({
          username: response.data.username,
          usernameSlug: response.data.usernameSlug,
          email: response.data.email,
        }));
        store.dispatch(setLoggedToTrue());
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
