import { axiosInstance } from '../../services/axios';
import {
  FETCH_ONE_SPECIES,
  FETCH_SPECIES_LIST, setLoadingSpeciesToFalse, setLoadingSpeciesToTrue, setOneSpecies, setSpeciesList,
} from '../actions/species';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_SPECIES_LIST: {
      try {
        store.dispatch(setLoadingSpeciesToTrue());
        const response = await axiosInstance.get('/species');
        store.dispatch(setSpeciesList(response.data));
        store.dispatch(setLoadingSpeciesToFalse());
      }
      catch (error) {
        console.log(error);
      }
      next(action);
      break;
    }
    case FETCH_ONE_SPECIES:
      try {
        const response = await axiosInstance.get(`/species/${action.id}`);
        store.dispatch(setOneSpecies(response.data));
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
