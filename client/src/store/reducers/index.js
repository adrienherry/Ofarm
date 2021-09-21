import { combineReducers } from 'redux';
import authentificationReducer from './authentification';
import headerReducer from './header';
import userReducer from './user';

const rootReducer = combineReducers({
  // ici, on indique que notre state aurra une tranche (slice) appelée
  // recipes et que c'est le reducers recipesReducer (défini dans le module ./recipes)
  // qui en aura la charge
  // on accède à cette tranche du state par state.recipes
  auth: authentificationReducer,
  header: headerReducer,
  user: userReducer,
});

export default rootReducer;
