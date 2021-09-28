import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import './individual-species.scss';
import { useParams } from 'react-router-dom';
import { fetchSpeciesList } from '../../../store/actions/species';
import { findSpecies } from '../../../selectors/species';

const IndividualSpecies = () => {
  const dispatch = useDispatch();
  const speciesList = useSelector((state) => state.species.speciesList);
  const { slug } = useParams();
  console.log(slug);
  const species = findSpecies(speciesList, slug);

  useEffect(() => {
    dispatch(fetchSpeciesList());
  }, []);

  console.log(species);
  return (
    <div className="individual-species">
      {species && (
      <Grid container>
        <Grid item lg={3}>
          <img src={species.imageUrl} alt={species.name} />
          <h1>{species.name}</h1>
        </Grid>
      </Grid>
      )}
    </div>
  );
};

export default IndividualSpecies;
