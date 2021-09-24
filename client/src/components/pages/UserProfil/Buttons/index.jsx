import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const Buttons = () => (
  <div>
    <Button variant="contained" disabled>Mes jardins</Button>
    <Button variant="contained">Informations personnelles</Button>
  </div>
);

Buttons.propTypes = {

};

export default Buttons;
