import {
	SET_FIELD
} from "../actions/field";

const initialState = {
    fieldList: [],  
};

const fieldReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_FIELD:
			return {
				...state,
				value: action.value,
			};
		default:
			return state;
	}
};

export default fieldReducer;
