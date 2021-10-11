import React from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import CarrouselContainer from './CarrouselContainer';
import './homepage.scss';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import PitchContainer from './PitchContainer';
import calendarPicture from '/calendar.png';

const HomePage = () => {
  const is1075 = useMediaQuery('(min-width:1075px)');

  return (
    <div className="homepage">
      <div className="homepage__header" style={!is1075 ? { flexDirection: 'column', alignItems: 'center', margin: '4rem 0' } : {}}>
        <div className="homepage__title-container" style={!is1075 ? { width: '100%', justifyContent: 'center', marginBottom: '3rem' } : {}}>
          <h1 className="homepage__title" style={!is1075 ? { fontSize: '3rem' } : {}}>Vous
            aussi, <br />
            rejoignez <br />
            notre <br />
            communauté
            <br />de
            <br />
            jardiniers!
          </h1>
        </div>
        <div className="homepage__header-calendar" style={!is1075 ? { width: '100%', justifyContent: 'center' } : {}}>
          <h2 className="homepage__header-calendar-title">
            Créez votre jardin et planifiez vos récoltes grâce à notre calendrier
          </h2>
          <img
            src={calendarPicture}
            alt="calendar"
            className="homepage__header-calendar-picture"
          />
          <Link
            to="/register"
          >
            <div className="homepage__header-calendar-link">
              Inscrivez-vous
            </div>
          </Link>
        </div>
      </div>
      <Grid container direction="row" justifyContent="center">
        <Grid
          item
          xl={6}
          lg={7}
          md={7}
          sm={11}
          xs={11}
          mb={4}
          className="homepage__container"
        >
          <CarrouselContainer />

        </Grid>
        <Grid item lg={9} md={9} sm={11} xs={11} mb={5} className="homepage">
          <PitchContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
