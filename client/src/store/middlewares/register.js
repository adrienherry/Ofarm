import {
  resetEmptyRegisterField,
  resetErrorEmailRegister,
  resetRegisterInfo,
  SEND_REGISTER_FORM,
  setEmptyRegisterField,
  setErrorEmailRegister,
  setIsConfirmedToFalse,
  setIsConfirmedToTrue,
  setReadyToSendToTrue,
} from '../actions/register';
import { axiosInstance } from '../../services/axios';
import validateEmail from '../../utils/validateEmail';

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
        if (!response.data.errors) {
          store.dispatch(setReadyToSendToTrue());
        }
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
