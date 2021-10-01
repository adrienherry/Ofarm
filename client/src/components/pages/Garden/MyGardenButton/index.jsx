import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const myGardenButton = ({ name }) => (
  <Button
    variant="contained"
    className="myGardenHeader__button"
    sx={{
      backgroundColor: '#3D3B2C',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      '&:hover': {
        backgroundColor: '#3D3B2C',
        boxShadow: '0 10px 20px rgba(255,255,255,0.19), 0 6px 6px rgba(255,255,255,0.23)',
      },
    }}
  >
    { name }
  </Button>
);

myGardenButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default myGardenButton;