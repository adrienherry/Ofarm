import { axiosInstance } from "../../services/axios";
// import {
// 	CREATE_GARDEN,
// 	resetGardenInfo,
// 	setCreateGardenError,
// 	setReadyToRedirectToTrue,
// } from "../actions/createGarden";

import {
	SET_FIELD,
	setField,
	setLoadingMapToFalse,
	setLoadingMapToTrue,
} from "../actions/field";

export default (store) => (next) => async (action) => {
	switch (action.type) {
		case SET_FIELD: {
			try {
				// const {
				// 	user: { token },
				// } = store.getState();
				// store.dispatch(setLoadingMapToTrue());

				// const response = await axiosInstance.get(`/garden/5/field`, {
				// 	headers: {
				// 		"Access-Control-Allow-Origin": "*",
				// 		Authorization: `Bearer ${token}`,
				// 	},
				// });
				// store.dispatch(setField(response.data));
				// store.dispatch(setLoadingMapToFalse());
			} catch (error) {
				console.log(error);
			}
			next(action);
			break;
		}
	}
};
