import React from 'react';
import { Grid, SliderValueLabel, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import './header-logo.scss';
import logo from '/logo_ofarm.png';

const Headerlogo = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className="header-logo">
      <Grid container alignItems="center">
        <Grid item lg={3}>
          <Link
            to="/"
            exact={SliderValueLabel.toString()}
            className="header-logo__link"
          >
            <img src={logo} alt="logo ofarm" className="header-logo__image" style={isMobile ? { height: '6rem', width: '6rem' } : { height: '8rem', width: '8rem' }} />
          </Link>
        </Grid>
        <Grid item lg={9}>
          {!isMedium && (
          <h1 className="header-logo__title">
            O'Farm
          </h1>
          )}
          {!isLarge && (
          <h2 className="header-logo__description">
            L’appli qui t’aide à faire pousser<br />
            tes légumes à domicile !
          </h2>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Headerlogo;
