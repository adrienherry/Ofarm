import { axiosInstance } from '../../services/axios';
import {
  SEND_LOGIN_FORM, setLoggedToTrue,
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
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('usernameSlug', response.data.usernameSlug);
        localStorage.setItem('email', response.data.email);
        store.dispatch(setUserToken(response.data.token));
        store.dispatch(setUserInfo({
          username: response.data.username,
          usernameSlug: response.data.usernameSlug,
          email: response.data.email,
        }));
        store.dispatch(setLoggedToTrue());
      }
      catch (error) {
        console.log(error.response);
      }
      next(action);
      break;
    default:
      next(action);
  }
};
