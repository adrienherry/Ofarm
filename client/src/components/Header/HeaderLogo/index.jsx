import { Grid, SliderValueLabel, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import './header-logo.scss';
import logo from '/logo_ofarm.png';

const Headerlogo = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <div className="header-logo">
      <Grid container alignItems="center">
        <Grid item lg={3}>
          <Link
            to="/"
            exact={SliderValueLabel.toString()}
            className="header-logo__link"
          >
            <img src={logo} alt="logo ofarm" className="header-logo__image" />
          </Link>
        </Grid>
        <Grid item lg={9}>
          <h1 className="header-logo__title">
            O'Farm
          </h1>
          {!isLarge && (
          <h2 className="header-logo__description">
            L’appli qui t’aide à faire pousser tes légumes à domicile!
          </h2>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Headerlogo;
