/* eslint-disable prefer-const */
import React from 'react';
import { Grid } from '@material-ui/core';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './display-species-choosen.scss';
import { useDispatch, useSelector } from 'react-redux';
import { speciesArrayWithoutChoosenSpecies } from '../../../../../utils/speciesArrayWithoutChoosenSpecies';
import { setNewSpeciesChoosenList } from '../../../../../store/actions/createGarden';

const DisplaySpeciesChoosen = () => {
  const dispatch = useDispatch();
  const speciesChoosenList = useSelector((state) => state.createGarden.speciesChoosenList);
  const handleDelete = (event) => {
    let { parentElement } = event.target;
    let valueElement = parentElement.querySelector('span');
    if (valueElement === null) {
      parentElement = event.target.parentElement.parentElement;
      valueElement = parentElement.querySelector('span');
    }
    const value = valueElement.textContent;
    const speciesChoosenListUpdated = speciesArrayWithoutChoosenSpecies(speciesChoosenList, value);
    dispatch(setNewSpeciesChoosenList(speciesChoosenListUpdated));
  };
  return (
    <div className="display-species-choosen">
      <Grid item>
        <h4 className="display-species-choosen__title">
          Vos légumes sélectionnés:
        </h4>
      </Grid>
      <Stack direction="row" sx={{ flexWrap: 'wrap' }} justifyContent="center" alignItems="center">
        {speciesChoosenList.map((species) => (
          <Chip
            label={species.name}
            key={species.id}
            onDelete={handleDelete}
            sx={{
              marginBottom: '1rem', marginRight: '0.5rem',
            }}
          />
        ))}
      </Stack>
    </div>
  );
};

export default DisplaySpeciesChoosen;
