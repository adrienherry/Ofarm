import React from 'react';
import PropTypes from 'prop-types';
import './search-bar-item.scss';
import { NavLink } from 'react-router-dom';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';

const SearchBarItem = ({ imageUrl, name, nameSlug }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <NavLink
      to={`/species/${nameSlug}`}
      exact
    >
      <li className="search-bar-item">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item lg={3} md={5} sm={5} xs={6} container alignItems="center">
            <Grid item lg={3}>
              <img
                src={imageUrl}
                alt={name}
                className="search-bar-item__thumbnail"
                style={isMobile ? {
                  maxWidth: '4rem',
                  maxHeight: '4rem',
                  minWidth: '4rem',
                  minHeight: '4rem',
                } : {}}
              />
            </Grid>
          </Grid>
          <Grid item lg={9} md={7} sm={7} xs={6}>
            <h3 className="search-bar-item__name">{ name }</h3>
          </Grid>
        </Grid>
      </li>
    </NavLink>
  );
};

SearchBarItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameSlug: PropTypes.string.isRequired,

};

export default SearchBarItem;
