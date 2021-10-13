export const FETCH_HARVEST = 'FETCH_HARVEST';

export const fetchHarvest = () => (
  {
    type: FETCH_HARVEST,
  }
);

export const SET_GARDEN_HARVEST = 'SET_GARDEN_HARVEST';

export const setGardenHarvest = (harvest) => (
  {
    type: SET_GARDEN_HARVEST,
    harvest,
  }
);
