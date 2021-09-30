import {
  resetRegisterInfo,
  SEND_REGISTER_FORM,
  setIsConfirmedToFalse,
  setIsConfirmedToTrue,
  setIsReadyToRedirectToLoginToTrue,
} from '../actions/register';
import { axiosInstance } from '../../services/axios';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case SEND_REGISTER_FORM:
      try {
        const {
          register: {
            password, confirmPassword, username, email,
          },
        } = store.getState();
        if (password === confirmPassword) {
          store.dispatch(setIsConfirmedToTrue());
          const response = await axiosInstance.post('/register', {
            username: username,
            email: email,
            password: password,
          });
          store.dispatch(resetRegisterInfo());
          store.dispatch(setIsReadyToRedirectToLoginToTrue());
        }
        else {
          store.dispatch(setIsConfirmedToFalse());
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
