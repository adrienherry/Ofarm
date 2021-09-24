import React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const Buttons = ({ button1, button2 }) => (
  <Stack direction="row" spacing={2}>
    <Button variant="contained" disabled>
      {button1}
    </Button>
    <Button variant="contained">{button2}</Button>

  </Stack>
);

Buttons.propTypes = {
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
};

export default Buttons;
