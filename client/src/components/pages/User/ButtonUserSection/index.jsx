import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import './button-user-section.scss';

const ButtonUserSection = ({ name }) => (
  <div className="button-user-section">{ name }</div>
);

ButtonUserSection.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ButtonUserSection;
