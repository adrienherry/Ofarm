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

export const SET_SELECTED_SPECIES_TO_ADD = 'SET_SELECTED_SPECIES_TO_ADD';

export const setSelectedSpeciesToAdd = (value) => (
  {
    type: SET_SELECTED_SPECIES_TO_ADD,
    value,
  }
);

export const SET_ERROR_ADD_SPECIES = 'SET_ERROR_ADD_SPECIES';

export const setErrorAddSpecies = () => (
  {
    type: SET_ERROR_ADD_SPECIES,
  }
);

export const RESET_ERROR_ADD_SPECIES = 'RESET_ERROR_ADD_SPECIES';

export const resetErrorAddSpecies = () => (
  {
    type: RESET_ERROR_ADD_SPECIES,
  }
);

export const ADD_SPECIES_TO_GARDEN = 'ADD_SPECIES_TO_GARDEN';

export const addSpeciesToGarden = (species) => (
  {
    type: ADD_SPECIES_TO_GARDEN,
    species,
  }
);

export const SET_SPECIES_TO_GARDEN = 'SET_SPECIES_TO_GARDEN';

export const setSpeciesToGarden = (species) => (
  {
    type: SET_SPECIES_TO_GARDEN,
    species,
  }
);

export const SET_NEW_GARDEN = 'SET_NEW_GARDEN';

export const setNewGarden = (garden) => (
  {
    type: SET_NEW_GARDEN,
    garden,
  }
);

export const SET_READY_TO_ADD_TO_TRUE = 'SET_READY_TO_ADD_TO_TRUE';

export const setReadyToAddToTrue = () => (
  {
    type: SET_READY_TO_ADD_TO_TRUE,
  }
);

export const SET_READY_TO_ADD_TO_FALSE = 'SET_READY_TO_ADD_TO_FALSE';

export const setReadyToAddToFalse = () => (
  {
    type: SET_READY_TO_ADD_TO_FALSE,
  }
);

export const SET_SELECTED_SPECIES_LIST = 'SET_SELECTED_SPECIES_LIST';

export const setSelectedSpeciesList = (speciesList) => (
  {
    type: SET_SELECTED_SPECIES_LIST,
    speciesList,
  }
);

export const SET_NEW_SELECTED_SPECIES_LIST = 'SET_SELECTED_SPECIES_LIST';

export const setNewSelectedSpeciesList = (payload) => (
  {
    type: SET_SELECTED_SPECIES_LIST,
    payload,
  }
);

export const DELETE_GARDEN_SPECIES = 'DELETE_GARDEN_SPECIES';

export const deleteGardenSpecies = (name) => (
  {
    type: DELETE_GARDEN_SPECIES,
    name,
  }
);

export const SET_SELECTED_SPECIES_FORM = 'SET_SELECTED_SPECIES_FORM';

export const setSelectedSpeciesForm = (value) => (
  {
    type: SET_SELECTED_SPECIES_FORM,
    value,
  }
);

export const SET_DATE_FORM_HARVEST = 'SET_DATE_FORM_HARVEST';

export const setDateFormHarvest = (date) => (
  {
    type: SET_DATE_FORM_HARVEST,
    date,
  }
);

export const SET_QUANTITY_FORM_HARVEST = 'SET_QUANTITY_FORM_HARVEST';

export const setQuantityFormHarvest = (quantity) => (
  {
    type: SET_QUANTITY_FORM_HARVEST,
    quantity,
  }
);

export const SET_COMMENT_FORM_HARVEST = 'SET_COMMENT_FORM_HARVEST';

export const setCommentFormHarvest = (comment) => (
  {
    type: SET_COMMENT_FORM_HARVEST,
    comment,
  }
);

export const ADD_HARVEST = 'ADD_HARVEST';

export const addHarvest = () => (
  {
    type: ADD_HARVEST,
  }
);

export const SET_ERROR_FORM_HARVEST = 'SET_ERROR_FORM_HARVEST';

export const setErrorFormHarvest = () => (
  {
    type: SET_ERROR_FORM_HARVEST,
  }
);

export const RESET_ERROR_FORM_HARVEST = 'RESET_ERROR_FORM_HARVEST';

export const resetErrorFormHarvest = () => (
  {
    type: RESET_ERROR_FORM_HARVEST,
  }
);

export const RESET_HARVEST = 'RESET_HARVEST';

export const resetHarvest = () => (
  {
    type: RESET_HARVEST,
  }
);
