import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import './individual-species.scss';
import { useParams } from 'react-router-dom';
import { fetchOneSpecies, fetchSpeciesList } from '../../../store/actions/species';
import { findSpecies } from '../../../selectors/species';

const IndividualSpecies = () => {
  const dispatch = useDispatch();
  const speciesList = useSelector((state) => state.species.speciesList);
  const { slug } = useParams();
  const speciesToFetch = findSpecies(speciesList, slug);
  const species = useSelector((state) => state.species.species);

  useEffect(() => {
    if (!speciesList[0]) {
      dispatch(fetchSpeciesList());
    }
    if (speciesToFetch) {
      dispatch(fetchOneSpecies(speciesToFetch.id));
    }
  }, []);

  return (
    <div className="individual-species">
      {species && (
      <Grid container>
        <Grid item container lg={3} alignItems="flex-start" justifyContent="center">
          <Grid item>
            <div className="individual-species__image-container">
              <img src={species.imageUrl} alt={species.name} className="individual-species__image" />
            </div>
          </Grid>
          <Grid item>
            <h1>{species.name}</h1>
          </Grid>
        </Grid>
      </Grid>
      )}
    </div>
  );
};

export default IndividualSpecies;
