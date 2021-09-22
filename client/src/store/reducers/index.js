import { combineReducers } from "redux";


import { combineReducers } from 'redux';
import authentificationReducer from './authentification';
import headerReducer from './header';
import userReducer from './user';
import searchBarReducer from './searchbar';
import formReducer from "./form";


const rootReducer = combineReducers({
  // ici, on indique que notre state aurra une tranche (slice) appelée
  // recipes et que c'est le reducers recipesReducer (défini dans le module ./recipes)
  // qui en aura la charge
  // on accède à cette tranche du state par state.recipes

  form: formReducer,
  auth: authentificationReducer,
  header: headerReducer,
  user: userReducer,
  searchbar: searchBarReducer,
});

export default rootReducer;
