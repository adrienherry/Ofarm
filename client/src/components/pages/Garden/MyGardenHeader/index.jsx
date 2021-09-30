import React from 'react';
import { Button, Stack } from '@material-ui/core';
import PropTypes from 'prop-types';
import './myGardenHeader.scss';

const MyGardenHeader = ({ garden, button1, button2 }) => (
  <header className="myGardenHeader">
    <Button variant="contained"> {garden} </Button>
    <Stack direction="row" spacing={2}>
      <Button variant="contained"> {button1} </Button>
      <Button variant="contained" disabled> {button2} </Button>
    </Stack>
  </header>
);

MyGardenHeader.propTypes = {
  garden: PropTypes.string.isRequired,
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
};

export default MyGardenHeader;
