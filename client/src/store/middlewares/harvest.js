import { axiosInstance } from '../../services/axios';
import { FETCH_HARVEST, setGardenHarvest } from '../actions/harvest';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_HARVEST:
      try {
        const { user: { token } } = store.getState();
        const { garden: { garden } } = store.getState();
        const response = await axiosInstance.get(`/garden/${garden.id}/harvest`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("FETCH HARVEST")
        console.log(response.data)
        store.dispatch(setGardenHarvest(response.data));
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
