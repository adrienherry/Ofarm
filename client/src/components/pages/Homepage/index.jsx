import { Grid, useMediaQuery } from '@material-ui/core';
import React from 'react';
import CarrouselContainer from './CarrouselContainer';
import User from '../User';
import './homepage.scss';

const HomePage = () => (
  <div className="homepage">
    {/* <Grid container flexDirection="column" justifyContent="space-between" alignItems="center" className="homepage__grid-container">
      <Grid
        item
        container
        flexDirection="row"
        justifyContent="center"
        sm={11}
        lg={9}
        xs={11}
        md={9}
        className="homepage__grid-container__carrousel"
      >
        <CarrouselContainer />
      </Grid>
    </Grid> */}
    <User />
  </div>

);

export default HomePage;
