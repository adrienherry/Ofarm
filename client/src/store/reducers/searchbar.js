import {
  COLLAPSE_CONTAINER,
  EXPAND_CONTAINER,
  RESET_SEARCH_VALUE,
  RESET_RESULTS,
  SET_IS_EMPTY_TO_FALSE,
  SET_IS_EMPTY_TO_TRUE,
  SET_LOADING_TO_FALSE,
  SET_LOADING_TO_TRUE,
  SET_NO_RESULTS_TO_FALSE,
  SET_NO_RESULTS_TO_TRUE,
  SET_SEARCH_VALUE,
  SET_TIMER,
  SET_SEARCH_RESULT,
}
  from '../actions/searchbar';

const initialState = {
  isExpanded: false,
  searchValue: '',
  timer: null,
  isLoading: false,
  results: [],
  isEmpty: true,
  noResults: false,
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
    case SET_SEARCH_RESULT:
      return {
        ...state,
        results: action.result,
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
    case RESET_RESULTS:
      return {
        ...state,
        results: [],
      };
    case SET_NO_RESULTS_TO_TRUE:
      return {
        ...state,
        noResults: true,
      };
    case SET_NO_RESULTS_TO_FALSE:
      return {
        ...state,
        noResults: false,
      };
    default:
      return state;
  }
};

export default searchBarReducer;
