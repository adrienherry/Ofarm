import {
  COLLAPSE_CONTAINER,
  EXPAND_CONTAINER,
  RESET_SEARCH_VALUE,
  RESET_TVSHOWS,
  SET_IS_EMPTY_TO_FALSE,
  SET_IS_EMPTY_TO_TRUE,
  SET_LOADING_TO_FALSE,
  SET_LOADING_TO_TRUE,
  SET_NOTVSHOWS_TO_FALSE,
  SET_NOTVSHOWS_TO_TRUE,
  SET_SEARCH_VALUE,
  SET_TIMER,
  SET_TVSHOWS,
}
  from '../actions/searchbar';

const initialState = {
  isExpanded: false,
  searchValue: '',
  timer: null,
  isLoading: false,
  tvShows: [],
  isEmpty: true,
  noTvShows: false,
};

const searchBarReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case EXPAND_CONTAINER:
      return {
        ...state,
        isExpanded: true,
      };
    case COLLAPSE_CONTAINER:
      return {
        ...state,
        isExpanded: false,
        isLoading: false,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
      };
    case RESET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: '',
      };
    case SET_TIMER:
      return {
        ...state,
        timer: action.timer,
      };
    case SET_LOADING_TO_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case SET_TVSHOWS:
      return {
        ...state,
        tvShows: action.tvShows,
      };
    case SET_LOADING_TO_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    case SET_IS_EMPTY_TO_TRUE:
      return {
        ...state,
        isEmpty: true,
      };
    case SET_IS_EMPTY_TO_FALSE:
      return {
        ...state,
        isEmpty: false,
      };
    case RESET_TVSHOWS:
      return {
        ...state,
        tvShows: [],
      };
    case SET_NOTVSHOWS_TO_TRUE:
      return {
        ...state,
        noTvShows: true,
      };
    case SET_NOTVSHOWS_TO_FALSE:
      return {
        ...state,
        noTvShows: false,
      };
    default:
      return state;
  }
};

export default searchBarReducer;
