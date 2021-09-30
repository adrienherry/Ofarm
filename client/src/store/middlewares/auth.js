import { axiosInstance } from '../../services/axios';
import { SEND_LOGIN_FORM, setIsReadyToRedirectToFalse, setLoggedToTrue } from '../actions/authentification';
import { setUserInfo } from '../actions/user';

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
        store.dispatch(setUserInfo({
          username: response.data.username,
          usernameSlug: response.data.usernameSlug,
        }));
        store.dispatch(setLoggedToTrue());
        store.dispatch(setIsReadyToRedirectToFalse());
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
