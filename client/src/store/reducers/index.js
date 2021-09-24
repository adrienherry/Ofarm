import { combineReducers } from "redux";
import authentificationReducer from "./authentification";
import headerReducer from "./header";
import userReducer from "./user";
import searchBarReducer from "./searchbar";
import registerReducer from "./register";
import speciesReducer from "./species";
import profilReducer from "./profil";

const rootReducer = combineReducers({
  // ici, on indique que notre state aurra une tranche (slice) appelée
  // recipes et que c'est le reducers recipesReducer (défini dans le module ./recipes)
  // qui en aura la charge
  // on accède à cette tranche du state par state.recipes
  profil: profilReducer,
  register: registerReducer,
  auth: authentificationReducer,
  header: headerReducer,
  user: userReducer,
  searchbar: searchBarReducer,
  species: speciesReducer,
});

export default rootReducer;
