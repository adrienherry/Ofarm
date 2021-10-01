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
      <Grid container direction="row" justifyContent="center">
        <Grid
          item
          lg={9}
          md={9}
          sm={11}
          xs={11}
          mb={10}
          className="homepage"
        >
          <PitchContainer />
        </Grid>
        <Grid
          item
          lg={9}
          md={9}
          sm={11}
          xs={11}
          className="homepage__container"
          data-aos="slide-up"
        >
          <CarrouselContainer />
        </Grid>
      </Grid>
    </div>

  );
};

export default HomePage;
