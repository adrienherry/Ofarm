import React from 'react';
import { Grid } from '@material-ui/core';
import UserHeader from '../UserHeader';
import GardensCard from './GardensCard';
import './gardens.scss';

const Gardens = () => (
  <div className="myGarden">
    <UserHeader />
    <Grid container justifyContent="center">
      <Grid item m={3}>
        <GardensCard
          title="Le jardin d'Éden"
          description="Je ne plante rien mais je récolte tout !!"
        />
      </Grid>
      <Grid item m={3}>
        <GardensCard
          title="Le jardin d'Éden"
          description="Je ne plante rien mais je récolte tout !!"
        />
      </Grid>
      <Grid item m={3}>
        <GardensCard
          title="Le jardin d'Éden"
          description="Je ne plante rien mais je récolte tout !!"
        />
      </Grid>
      <Grid item m={3}>
        <GardensCard
          title="Le jardin d'Éden"
          description="Je ne plante rien mais je récolte tout !!"
        />
      </Grid>
    </Grid>
  </div>
);

export default Gardens;
