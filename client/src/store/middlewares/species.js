import axios from 'axios';
import { FETCH_SPECIES_LIST } from '../actions/species';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_SPECIES_LIST: {
      try {
        const response = axios.get('https://ln-ofarm-dev.herokuapp.com/api/v1');
        console.log(response);
      }
      catch (error) {
        console.log(err);
      }
      next(action);
      break;
    }
    default:
      next(action);
  }
};
