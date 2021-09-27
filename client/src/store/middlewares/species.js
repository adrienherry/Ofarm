import axios from 'axios';
import {
  FETCH_SPECIES_LIST, setLoadingSpeciesToFalse, setLoadingSpeciesToTrue, setSpeciesList,
} from '../actions/species';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_SPECIES_LIST: {
      try {
        store.dispatch(setLoadingSpeciesToTrue());
        const response = await axios.get('https://ln-ofarm-dev.herokuapp.com/api/v1/species');
        store.dispatch(setSpeciesList(response.data));
        store.dispatch(setLoadingSpeciesToFalse());
      }
      catch (error) {
        console.log(error);
      }
      next(action);
      break;
    }
    default:
      next(action);
  }
};
