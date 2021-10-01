import React from 'react';
import { Stack } from '@material-ui/core';
import MyGardenButton from '../MyGardenButton';
import './myGardenHeader.scss';

const MyGardenHeader = () => (
  <header className="myGardenHeader">
    <MyGardenButton name="Créer un nouveau jardin" />
    <Stack direction="row" spacing={2}>
      <MyGardenButton name="Mes jardins" />
      <MyGardenButton name="Information personnelles" disabled />
    </Stack>
  </header>
);

export default MyGardenHeader;
