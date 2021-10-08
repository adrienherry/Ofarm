/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import arrow from '../../../public/icons8-arrow-100.png';
import NavigationLink from '../Footer/NavigationLink';
import './redesign-footer.scss';

const RedesignFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="redesign-footer">
      <div className="redesign-footer__separator" />
      <div className="redesign-footer__container">
        <div
          className="redesign-footer__container--returnTop"
          onClick={returnTop}
          style={isMobile ? { fontSize: '0.8rem' } : {}}
        >
          <h3> Retour en haut </h3>
          {/* <div className="redesign-footer__container--returnTop-arrow">
            <img src={arrow} alt="fleche" />
          </div> */}
          {/* Retournez en haut de la page */}
        </div>
        {/* <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={2}
          > */}

        {/* </Grid>
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            lg={2}
            md={2}
            sm={3}
            xs={3}
          > */}
        <div className="redesign-footer__container--navigation">
          <div className="redesign-footer__container--navigation-link1">
            <NavigationLink path="/species" name="Espèces" />
            <NavigationLink path="/login" name="Se connecter" />
            <NavigationLink path="/register" name="S'inscrire" />
          </div>
          {/* </Grid>
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            lg={2}
            md={2}
            sm={3}
            xs={3}
          > */}
          <div className="redesign-footer__container--navigation-link2">
            <NavigationLink path="/team" name="Équipe" />
            <NavigationLink path="/about" name="À propos" />
            <NavigationLink path="/terms" name="Mentions légales" />
          </div>
        </div>
        {/* </Grid>
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            lg={2}
            md={2}
            sm={2}
            xs={3}
          > */}
        <Link
          to="/"
          exact
        >
          <div className="redesign-footer__container--logo">
            <h3
              className="redesign-footer__container--logo-title"
              // style={isMobile ? { fontSize: '1.5rem' } : {}}
            >
              <span className="redesign-footer__container--logo-title-letter">O'</span>Farm
            </h3>
          </div>
        </Link>
        {/* </Grid>
        </Grid> */}
      </div>
    </div>
  );
};

export default RedesignFooter;
