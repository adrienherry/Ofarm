import React from 'react';
import { Stack } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MyGardenButton from '../MyGardenButton';
import './myGardenHeader.scss';

const MyGardenHeader = () => (
  <header className="myGardenHeader">
    <Link to="/">
      <MyGardenButton name="Créer un nouveau jardin" />
    </Link>
    <Stack direction="row" spacing={2}>
      <MyGardenButton name="Mes jardins" />
      <Link to="">
        <MyGardenButton name="Information personnelles" disabled />
      </Link>
    </Stack>
  </header>
);

export default MyGardenHeader;
