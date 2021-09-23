import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/styles';
import { fetchSpeciesList } from '../../../store/actions/species';
import './species.scss';
import SpeciesItem from './SpeciesItem';

const Species = () => {
  const dispatch = useDispatch();
  const speciesList = useSelector((state) => state.species.speciesList);

  useEffect(() => {
    dispatch(fetchSpeciesList());
  }, []);

  return (
    <div className="species">
      <Grid container direction="row" justifyContent="center" alignItems="flex-start" className="species__container">
        <Grid
          item
          lg={9}
          md={9}
          sm={11}
          xs={11}
          className="species__container-title"
        >
          <h3 className="species__title">
            Espèces
          </h3>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={6}
          columnSpacing={4}
          lg={8}
          md={8}
          sm={11}
          xs={11}
          className="species__container-items"
        >
          <SpeciesItem name="Tomate" slug="/" />
          <SpeciesItem name="Tomate" slug="/" />
          <SpeciesItem name="Tomate" slug="/" />
          <SpeciesItem name="Tomate" slug="/" />
          <SpeciesItem name="Tomate" slug="/" />
        </Grid>
      </Grid>
    </div>

  );
};

export default Species;
