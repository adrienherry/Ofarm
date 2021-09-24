import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@material-ui/core';
import PropTypes from 'prop-types';
import './navigation-link.scss';

const NavigationLink = ({ path, name }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Link
      className="navigation-link"
      to={path}
      exact
      style={isMobile ? { fontSize: '0.7rem' } : {}}
    >
      {name}
    </Link>
  );
};

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default NavigationLink;
