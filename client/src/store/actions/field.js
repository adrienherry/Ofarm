export const SET_FIELD = "SET_FIELD";

export const setField = (value) => ({
	type: SET_FIELD,
	value,
});

export const SET_LOADING_MAP_TO_TRUE = "SET_LOADING_MAP_TO_TRUE";

export const setLoadingMapToTrue = (value) => ({
	type: SET_LOADING_MAP_TO_TRUE,
	value,
});

export const SET_LOADING_MAP_TO_FALSE = "SET_LOADING_MAP_TO_FALSE";

export const setLoadingMapToFalse = (value) => ({
	type: SET_LOADING_MAP_TO_FALSE,
	value,
});
