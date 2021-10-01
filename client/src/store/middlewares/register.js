import {
  resetRegisterInfo,
  SEND_REGISTER_FORM,
} from '../actions/register';
import { axiosInstance } from '../../services/axios';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case SEND_REGISTER_FORM:
      try {
        const {
          register: {
            password, username, email,
          },
        } = store.getState();
        const response = await axiosInstance.post('/register', {
          username: username,
          email: email,
          password: password,
        });
        store.dispatch(resetRegisterInfo());
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
