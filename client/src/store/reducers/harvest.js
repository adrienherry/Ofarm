import { SET_GARDEN_HARVEST } from '../actions/harvest';

const initialState = {
  harvest: [],
};

const harvestReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_GARDEN_HARVEST:
      return {
        ...state,
        harvest: action.harvest,
      };
    default:
      return state;
  }
};

export default harvestReducer;
