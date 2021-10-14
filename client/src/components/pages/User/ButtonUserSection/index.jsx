import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import './button-user-section.scss';

const ButtonUserSection = ({ name, style }) => (
  <div className="button-user-section" style={style}>{name}</div>
);

ButtonUserSection.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ButtonUserSection;
