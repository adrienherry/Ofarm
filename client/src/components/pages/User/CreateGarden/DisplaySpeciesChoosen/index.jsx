import React from 'react';
import { Grid } from '@material-ui/core';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './display-species-choosen.scss';
import { useSelector } from 'react-redux';

const DisplaySpeciesChoosen = () => {
  const speciesChoosenList = useSelector((state) => state.createGarden.speciesChoosenList);
  const handleDelete = () => {

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
          <Chip label={species.name} key={species.id} onDelete={handleDelete} sx={{ marginBottom: '1rem', marginRight: '0.5rem' }} />
        ))}
      </Stack>
    </div>
  );
};

export default DisplaySpeciesChoosen;
