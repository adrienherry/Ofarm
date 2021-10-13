export const FETCH_GARDENS = 'FETCH_GARDENS';

export const fetchGardens = () => (
  {
    type: FETCH_GARDENS,
  }
);

export const SET_USER_GARDENS = 'SET_USER_GARDENS';

export const setUserGardens = (payload) => (
  {
    type: SET_USER_GARDENS,
    payload,
  }
);

export const SET_IS_GARDENS_LOADING_TO_TRUE = 'SET_IS_GARDENS_LOADING_TO_TRUE';

export const setIsGardensLoadingToTrue = () => (
  {
    type: SET_IS_GARDENS_LOADING_TO_TRUE,
  }
);

export const SET_IS_GARDENS_LOADING_TO_FALSE = 'SET_IS_GARDENS_LOADING_TO_FALSE';

export const setIsGardensLoadingToFalse = () => (
  {
    type: SET_IS_GARDENS_LOADING_TO_FALSE,
  }
);

export const SET_USER_GARDEN = 'SET_USER_GARDEN';

export const setUserGarden = (garden) => (
  {
    type: SET_USER_GARDEN,
    garden,
  }
);

export const SET_SELECTED_SPECIES = 'SET_SELECTED_SPECIES';

export const setSelectedSpecies = (value) => (
  {
    type: SET_SELECTED_SPECIES,
    value,
  }
);

export const SET_SELECTED_EVENT_TYPE = 'SET_SELECTED_EVENT_T';

export const setSelectedEventType = (value) => (
  {
    type: SET_SELECTED_EVENT_TYPE,
    value,
  }
);

export const SET_EVENTS = 'SET_EVENTS';

export const setEvents = (events) => (
  {
    type: SET_EVENTS,
    events,
  }
);

export const OPEN_MODAL = 'OPEN_MODAL';

export const openModal = () => (
  {
    type: OPEN_MODAL,
  }
);

export const CLOSE_MODAL = 'CLOSE_MODAL';

export const closeModal = () => (
  {
    type: CLOSE_MODAL,
  }
);

export const SET_MODAL_DATE = 'SET_MODAL_DATE';

export const setModalDate = (date) => (
  {
    type: SET_MODAL_DATE,
    date,
  }
);

export const SET_MODAL_EVENTS = 'SET_MODAL_EVENTS';

export const setModalEvents = (events) => (
  {
    type: SET_MODAL_EVENTS,
    events,
  }
);

export const DELETE_GARDEN = 'DELETE_GARDEN';

export const deleteGarden = (id) => (
  {
    type: DELETE_GARDEN,
    id,
  }
);

export const SET_NEW_GARDENS = 'SET_NEW_GARDENS';

export const setNewGardens = (gardens) => (
  {
    type: SET_NEW_GARDENS,
    gardens,
  }
);
