export const EXPAND_CONTAINER = 'EXPAND_CONTAINER';

export const expandContainer = () => (
  {
    type: EXPAND_CONTAINER,
  }
);

export const COLLAPSE_CONTAINER = 'COLLAPSE_CONTAINER';

export const collapseContainer = () => (
  {
    type: COLLAPSE_CONTAINER,
  }
);

export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

export const setSearchValue = (value) => (
  {
    type: SET_SEARCH_VALUE,
    value,
  }
);

export const RESET_SEARCH_VALUE = 'RESET_SEARCH_VALUE';

export const resetSearchValue = () => (
  {
    type: RESET_SEARCH_VALUE,
  }
);

export const SET_TIMER = 'SET_TIMER';

export const setTimer = (timer) => (
  {
    type: SET_TIMER,
    timer,
  }
);

export const FETCH_SEARCH_INFO = 'FETCH_SEARCH_INFO';

export const fetchSearchInfo = () => (
  {
    type: FETCH_SEARCH_INFO,
  }
);

export const SET_LOADING_TO_TRUE = 'SET_LOADING_TO_TRUE';

export const setLoadingToTrue = () => (
  {
    type: SET_LOADING_TO_TRUE,
  }
);

export const SET_SEARCH_RESULT = 'SET_TVSHOWS';

export const setSearchResult = (result) => (
  {
    type: SET_SEARCH_RESULT,
    result,
  }
);

export const SET_LOADING_TO_FALSE = 'SET_LOADING_TO_FALSE';

export const setLoadingToFalse = () => (
  {
    type: SET_LOADING_TO_FALSE,
  }
);

export const SET_IS_EMPTY_TO_TRUE = 'SET_IS_EMPTY_TO_TRUE';

export const setIsEmptyToTrue = () => (
  {
    type: SET_IS_EMPTY_TO_TRUE,
  }
);

export const SET_IS_EMPTY_TO_FALSE = 'SET_IS_EMPTY_TO_FALSE';

export const setIsEmptyToFalse = () => (
  {
    type: SET_IS_EMPTY_TO_FALSE,
  }
);

export const RESET_RESULTS = 'RESET_RESULTS';

export const resetResults = () => (
  {
    type: RESET_RESULTS,
  }
);

export const SET_NO_RESULTS_TO_TRUE = 'SET_NO_RESULTS_TO_TRUE';

export const setNoResultsToTrue = () => (
  {
    type: SET_NO_RESULTS_TO_TRUE,
  }
);

export const SET_NO_RESULTS_TO_FALSE = 'SET_NO_RESULTS_TO_FALSE';

export const setNoResultsToFalse = () => (
  {
    type: SET_NO_RESULTS_TO_FALSE,
  }
);
