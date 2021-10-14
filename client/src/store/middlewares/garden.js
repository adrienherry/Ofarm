import { axiosInstance } from '../../services/axios';
import filterSpecies from '../../utils/filterSpecies';
import findSpeciesId from '../../utils/findSpeciesId';
import {
  CREATE_GARDEN, setCreateGardenError, setReadyToRedirectToTrue,
} from '../actions/createGarden';
import {
  ADD_HARVEST,
  ADD_SPECIES_TO_GARDEN,
  DELETE_GARDEN,
  DELETE_GARDEN_SPECIES,
  fetchGardens,
  FETCH_GARDENS,
  resetHarvest,
  setIsGardensLoadingToFalse,
  setIsGardensLoadingToTrue,
  setNewGarden,
  setNewGardens,
  setNewSelectedSpeciesList,
  setReadyToAddToTrue,
  setSelectedSpeciesList,
  setSpeciesToGarden,
  setUserGardens,
} from '../actions/gardens';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_GARDEN:
      try {
        const { createGarden: { gardenName, speciesChoosenList } } = store.getState();
        const { user: { token } } = store.getState();
        const response = await axiosInstance.post('/garden', {
          name: gardenName,
          species: speciesChoosenList,
        }, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        store.dispatch(setReadyToRedirectToTrue());
      }
      catch (error) {
        console.log(error);
        store.dispatch(setCreateGardenError());
      }
      next(action);
      break;
    case FETCH_GARDENS:
      try {
        const { user: { token } } = store.getState();
        store.dispatch(setIsGardensLoadingToTrue());
        const response = await axiosInstance('/user', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        store.dispatch(setUserGardens(response.data.gardens));
        store.dispatch(setIsGardensLoadingToFalse());
      }
      catch (error) {
        console.log(error);
      }
      next(action);
      break;
    case DELETE_GARDEN:
      try {
        const { user: { token, gardens } } = store.getState();
        const newGardens = gardens.filter((garden) => garden.id !== action.id);
        const response = await axiosInstance.delete(`/garden/${action.id}`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        store.dispatch(setNewGardens(newGardens));
      }
      catch (error) {
        console.log(error);
      }
      next(action);
      break;

    case ADD_SPECIES_TO_GARDEN:
      try {
        const { garden: { garden, selectedSpeciesToAdd, selectedSpeciesList } } = store.getState();
        const { species: { speciesList } } = store.getState();
        const { user: { token } } = store.getState();
        const speciesToAdd = findSpeciesId(speciesList, selectedSpeciesToAdd);
        const response = await axiosInstance.post(`/garden/${garden.id}/species`, {
          speciesId: speciesToAdd.id,
        }, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        const newSelectedSpeciesList = [...selectedSpeciesList, speciesToAdd];
        store.dispatch(setSelectedSpeciesList(newSelectedSpeciesList));
        store.dispatch(fetchGardens());
      }
      catch (error) {
        console.log(error);
      }
      next(action);
      break;
    case DELETE_GARDEN_SPECIES:
      try {
        const { garden: { garden, selectedSpeciesList } } = store.getState();
        const { species: { speciesList } } = store.getState();
        const { user: { token } } = store.getState();
        const { id } = findSpeciesId(speciesList, action.name);
        const response = await axiosInstance.delete(`/garden/${garden.id}/species`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
          data: {
            speciesId: id,
          },
        });
        console.log(response);
        const newSelectedSpeciesList = filterSpecies(selectedSpeciesList, id);
        store.dispatch(setSelectedSpeciesList(newSelectedSpeciesList));
        store.dispatch(fetchGardens());
      }
      catch (error) {
        console.log(error);
      }
      next(action);
      break;
    case ADD_HARVEST:
      try {
        const {
          garden: {
            garden,
            selectedSpeciesFormHarvest,
            selectedDateFormHarvest,
            selectedQuantityFormHarvest,
            selectedCommentFormHarvest,
          },
        } = store.getState();
        const { species: { speciesList } } = store.getState();
        const { user: { token } } = store.getState();
        const { id } = findSpeciesId(speciesList, selectedSpeciesFormHarvest);
        const response = await axiosInstance.post('/harvest', {
          gardenId: garden.id,
          speciesId: id,
          comment: selectedCommentFormHarvest,
          quantity: selectedQuantityFormHarvest,
          date: selectedDateFormHarvest,
        }, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        });
        store.dispatch(resetHarvest());
      }
      catch (error) {
        console.log(error);
      }
      next(action);
      break;
    default:
      next(action);
  }
};
