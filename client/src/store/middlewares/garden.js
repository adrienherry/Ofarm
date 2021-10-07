import { axiosInstance } from '../../services/axios';
import {
  CREATE_GARDEN, resetGardenInfo, setCreateGardenError, setReadyToRedirectToTrue,
} from '../actions/createGarden';
import {
  FETCH_GARDENS, setIsGardensLoadingToFalse, setIsGardensLoadingToTrue, setUserGardens,
} from '../actions/gardens';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_GARDEN:
      try {
        const { createGarden: { gardenName, speciesChoosenList } } = store.getState();
        const { user: { token } } = store.getState();
        const response = await axiosInstance.post('/garden', {
          name: gardenName,
          species: speciesChoosenList,
        }, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        store.dispatch(setReadyToRedirectToTrue());
      }
      catch (error) {
        console.log(error);
        store.dispatch(setCreateGardenError());
      }
      next(action);
      break;
    case FETCH_GARDENS:
      try {
        const { user: { token } } = store.getState();
        store.dispatch(setIsGardensLoadingToTrue());
        const response = await axiosInstance('/user', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
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
