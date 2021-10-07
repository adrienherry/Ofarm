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
  // <div className="redesign-footer">
  //   <div className="redesign-footer__title">
  //     <span className="redesign-footer__title-span">O'</span>Farm

  //   </div>
  // </div>
    <div className="redesign-footer">
      <div className="redesign-footer__separator" />
      <div className="redesign-footer__container">
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
                className="redesign-footer__container--title"
                style={isMobile ? { fontSize: '1.5rem' } : {}}
              >
                <span className="redesign-footer__container--title-letter">O'</span>Farm
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
            <NavigationLink path="/terms" name="Mentions légales" />

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
              className="redesign-footer__container--returnTop"
              onClick={returnTop}
              style={isMobile ? { fontSize: '0.8rem' } : {}}
            >
              <img src={arrow} alt="fleche" />
              {/* Retournez en haut de la page */}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RedesignFooter;
