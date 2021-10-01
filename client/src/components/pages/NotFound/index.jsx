import React from 'react';
import './not-found.scss';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import chou2 from '/public/chou404.jpg';

const NotFound = () => (
  <div className="NotFound">
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <img className="NotFound__image" src={chou2} alt="chou blanc" />
      </Grid>
      <Grid item>
        <Link to="/">
          <div className="NotFound__redirect-btn">Retournez sur la page principale</div>
        </Link>
      </Grid>
    </Grid>
  </div>

);

export default NotFound;
