import {
  resetAlreadyExistError,
  resetEmptyRegisterField,
  resetErrorEmailRegister,
  resetRegisterInfo,
  SEND_REGISTER_FORM,
  setAlreadyExistError,
  setEmptyRegisterField,
  setErrorEmailRegister,
  setIsConfirmedToFalse,
  setIsConfirmedToTrue,
  setReadyToSendToTrue,
} from '../actions/register';
import { axiosInstance } from '../../services/axios';
import validateEmail from '../../utils/validateEmail';
import { setUserInfo, setUserToken } from '../actions/user';
import { setLoggedToTrue } from '../actions/authentification';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case SEND_REGISTER_FORM:
      try {
        const {
          register: {
            password, username, email, confirmPassword,
          },
        } = store.getState();
        if (password !== confirmPassword) {
          store.dispatch(setIsConfirmedToFalse());
        }
        if (password === confirmPassword) {
          store.dispatch(setIsConfirmedToTrue());
        }
        if (!validateEmail(email)) {
          store.dispatch(setErrorEmailRegister());
        }
        if (validateEmail(email)) {
          store.dispatch(resetErrorEmailRegister());
        }
        if (password === '' || username === '' || email === '' || confirmPassword === '') {
          store.dispatch(setEmptyRegisterField());
        }
        if (password !== '' && username !== '' && email !== '' && confirmPassword !== '') {
          store.dispatch(resetEmptyRegisterField());
        }
        const response = await axiosInstance.post('/register', {
          username: username,
          email: email,
          password: password,
        });

        const response2 = await axiosInstance.post('/login', {
          email: email,
          password: password,
        });
        localStorage.setItem('jwt', response2.data.token);
        store.dispatch(setUserToken(response2.data.token));
        store.dispatch(setUserInfo({
          username: response2.data.username,
          usernameSlug: response2.data.usernameSlug,
          email: response2.data.email,
        }));
        console.log(response.data);
        store.dispatch(setLoggedToTrue());
        if (!response.data.errors) {
          store.dispatch(setReadyToSendToTrue());
        }
      }
      catch (error) {
        console.log(error.response);
        if (error.response.data.error === 'Cet identifiant ou cet email sont déjà pris.') {
          store.dispatch(setAlreadyExistError());
        }
        else {
          store.dispatch(resetAlreadyExistError());
        }
      }
      next(action);
      break;
    default:
      next(action);
  }
};
