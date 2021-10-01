import React from 'react';
import { Grid } from '@material-ui/core';
import MyGardenHeader from './MyGardenHeader';
import MyGardenCard from './MyGardenCard';
import './garden.scss';

const MyGarden = () => (
  <div className="myGarden">
    {/* <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item container alignItems="center" justifyContent="center" lg={11} md={11} sm={11} xs={11}> */}
    <MyGardenHeader />
    <MyGardenCard
      title="Le jardin d'Éden"
      description="Je ne plante rien mais je récolte tout !!"
    />
    {/* </Grid>
    </Grid> */}
  </div>
);

export default MyGarden;
