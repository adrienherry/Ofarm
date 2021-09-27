import { axiosInstance } from '../../services/axios';
import {
  FETCH_SEARCH_INFO,
  setSearchResult,
  setLoadingToTrue,
  setNoResultsToFalse,
  setIsEmptyToFalse,
  setIsEmptyToTrue,
  setNoResultsToTrue,
  setLoadingToFalse,
} from '../actions/searchbar';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_SEARCH_INFO:
      try {
        const { searchbar: { searchValue } } = store.getState();
        if (!searchValue || searchValue.trim() === '') return;

        store.dispatch(setLoadingToTrue());
        store.dispatch(setNoResultsToFalse());
        const response = await axiosInstance.get(`/search?text=${searchValue}`);
        console.log(response.data);
        store.dispatch(setSearchResult(response.data));
        store.dispatch(setLoadingToFalse());
        if (response.data.length === 0) {
          store.dispatch(setIsEmptyToTrue());
          store.dispatch(setNoResultsToTrue());
        }
        else {
          store.dispatch(setIsEmptyToFalse());
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
