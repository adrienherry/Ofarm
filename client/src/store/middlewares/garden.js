import { axiosInstance } from '../../services/axios';
import { CREATE_GARDEN, resetGardenInfo, setCreateGardenError } from '../actions/createGarden';
import {
  FETCH_GARDENS, setIsGardensLoadingToFalse, setIsGardensLoadingToTrue, setUserGardens,
} from '../actions/gardens';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_GARDEN:
      try {
        const { createGarden: { gardenName, speciesChoosenList } } = store.getState();
        const speciesId = speciesChoosenList.map((species) => species.id);
        const response = await axiosInstance.post('/garden', {
          name: gardenName,
          species: speciesId,
        });

        store.dispatch(resetGardenInfo());
      }
      catch (error) {
        console.log(error);
        store.dispatch(setCreateGardenError());
      }
      next(action);
      break;
    case FETCH_GARDENS:
      try {
        store.dispatch(setIsGardensLoadingToTrue());
        const response = await axiosInstance('/user');
        store.dispatch(setUserGardens(response.data.gardens));
        store.dispatch(setIsGardensLoadingToFalse());
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
