import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import debugMiddleware from "./middlewares/debug";
import speciesMiddleware from "./middlewares/species";
import registerMiddleware from "./middlewares/register";
import authMiddleware from "./middlewares/auth";
import searchbarMiddleware from "./middlewares/searchbar";
import userMiddleware from "./middlewares/user";
import logoutMiddleware from "./middlewares/logout";
import gardenMiddleware from "./middlewares/garden";
import fieldMiddleware from "./middlewares/field";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
	debugMiddleware,
	speciesMiddleware,
	registerMiddleware,
	authMiddleware,
	searchbarMiddleware,
	userMiddleware,
	logoutMiddleware,
	fieldMiddleware,
	gardenMiddleware,
];

const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducer, enhancers);

export default store;
