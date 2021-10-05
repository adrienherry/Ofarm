import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import Field from '../../../Field';
import { setGardenName, createGarden, setErrorNoName } from '../../../../store/actions/createGarden';
import './create-garden.scss';
import SpeciesList from './SpeciesList';
import DisplaySpeciesChoosen from './DisplaySpeciesChoosen';
import UserHeader from '../UserHeader';

const CreateGarden = () => {
  const dispatch = useDispatch();
  const gardenName = useSelector((state) => state.createGarden.gardenName);
  const error = useSelector((state) => state.createGarden.error);

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  const handleChangeField = (value, name) => {
    dispatch(setGardenName(value, name));
  };

  const handleSubmitCreateGarden = (event) => {
    event.preventDefault();
    if (gardenName === '') {
      dispatch(setErrorNoName());
    }
    else {
      dispatch(createGarden());
    }
  };
  return (
    <>
      <UserHeader />
      <div className="create-garden">
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Grid item container alignItems="center" justifyContent="center" lg={5} md={5} sm={11} xs={11} sx={isMedium ? { marginBottom: '2rem' } : {}}>
            <form className="create-garden__form" onSubmit={handleSubmitCreateGarden}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <h3 className="create-garden__title">
                  Crée ton jardin
                </h3>
              </Grid>
              <Grid item container direction="column" lg={12} md={12} sm={12} xs={12} spacing={4}>
                <Grid item>
                  <Field
                    value={gardenName}
                    type="text"
                    name="gardenName"
                    placeholder="Nom du jardin"
                    onChange={handleChangeField}
                  />
                </Grid>
                <Grid item>
                  <div className="create-garden__list-title">
                    Sélectionnez vos légumes:
                  </div>
                  <SpeciesList />
                </Grid>
                <Grid item>
                  {error && (
                  <div>{error}</div>
                  )}
                </Grid>
                <Grid item>
                  <button
                    type="submit"
                    className="create-garden__submit-btn"
                  > Créer le jardin
                  </button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item lg={5} md={5} sm={11} xs={11} container justifyContent="center">
            <DisplaySpeciesChoosen />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CreateGarden;
