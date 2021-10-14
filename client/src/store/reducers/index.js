import { combineReducers } from 'redux';
import authentificationReducer from './authentification';
import headerReducer from './header';
import userReducer from './user';
import searchBarReducer from './searchbar';
import registerReducer from './register';
import speciesReducer from './species';
import createGardenReducer from './createGarden';
import profilReducer from './profil';
import userGardenReducer from './userGarden';
import harvestReducer from './harvest';

const rootReducer = combineReducers({
  profil: profilReducer,
  register: registerReducer,
  auth: authentificationReducer,
  header: headerReducer,
  user: userReducer,
  searchbar: searchBarReducer,
  species: speciesReducer,
  createGarden: createGardenReducer,
  garden: userGardenReducer,
  harvest: harvestReducer,
});

export default rootReducer;
