import { Grid, useMediaQuery } from '@material-ui/core';
import React, { useEffect } from 'react';
import aos from 'aos';
import CarrouselContainer from './CarrouselContainer';
import './homepage.scss';
import 'aos/dist/aos.css';
import PitchContainer from './PitchContainer';

const HomePage = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  });
  return (
    <div className="homepage">
      <h1 className="homepage__title">Vous aussi, rejoignez-notre communauté de jardiniers !</h1>
      <Grid container direction="row" justifyContent="center">
        <Grid
          item
          xl={6}
          lg={7}
          md={7}
          sm={11}
          xs={11}
          className="homepage__container"
          data-aos="fade-up"
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
