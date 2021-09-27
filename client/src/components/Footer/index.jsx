import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import NavigationLink from './NavigationLink';

const Footer = () => {
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
    <div className="footer">
      <div className="footer__separator" />
      <div className="footer__container">
        <Grid container direction="row" alignItems="center" justifyContent="space-around">
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={2}
          >
            <Link
              to="/"
              exact
            >
              <h3
                className="footer__title"
                style={isMobile ? { fontSize: '1.5rem' } : {}}
              >
                O'Farm
              </h3>
            </Link>
          </Grid>
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
          >
            <NavigationLink path="/species" name="Espèces" />
            <NavigationLink path="/login" name="Se connecter" />
            <NavigationLink path="/register" name="S'inscrire" />
          </Grid>
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
          >
            <NavigationLink path="/team" name="Équipe" />
            <NavigationLink path="/about" name="À propos" />
            <NavigationLink path="/terms" name="Mention légales" />

          </Grid>
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
          >
            <div
              className="footer__return-top"
              onClick={returnTop}
              style={isMobile ? { fontSize: '0.8rem' } : {}}
            >
              Retournez en haut de la page
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
