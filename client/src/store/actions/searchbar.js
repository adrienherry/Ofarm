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

export const SET_TVSHOWS = 'SET_TVSHOWS';

export const setTvShows = (tvShows) => (
  {
    type: SET_TVSHOWS,
    tvShows,
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

export const RESET_TVSHOWS = 'RESET_TVSHOWS';

export const resetTvShows = () => (
  {
    type: RESET_TVSHOWS,
  }
);

export const SET_NOTVSHOWS_TO_TRUE = 'SET_NOTVSHOWS_TO_TRUE';

export const setNoTvShowsToTrue = () => (
  {
    type: SET_NOTVSHOWS_TO_TRUE,
  }
);

export const SET_NOTVSHOWS_TO_FALSE = 'SET_NOTVSHOWS_TO_FALSE';

export const setNoTvShowsToFalse = () => (
  {
    type: SET_NOTVSHOWS_TO_FALSE,
  }
);
