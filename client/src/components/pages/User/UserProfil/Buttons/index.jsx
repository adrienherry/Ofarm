import React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@material-ui/core';
// import { makeStyles } from '@mui/material';
import PropTypes from 'prop-types';
import './buttons.scss';

const Buttons = ({ button1, button2 }) => (
  // const useStyles = makeStyles(() => ({
  //   root: {
  //     hover: {
  //       backgroundColor: 'green',
  //     },
  //   },
  // }));

  // const classes = useStyles();

  // return (
  <Stack direction="row" spacing={2} marginBottom={3} justifyContent="flex-end">
    <Button variant="contained" disabled>
      {button1}
    </Button>
    <Button variant="contained" sx={{ backgroundColor: '#3D3B2C' }}>{button2}</Button>
  </Stack>
);
// );

Buttons.propTypes = {
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
};

export default Buttons;
