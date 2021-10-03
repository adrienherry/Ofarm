import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import UserHeader from '../UserHeader';
import GardensCard from './GardensCard';
import './gardens.scss';
import { fetchGardens } from '../../../../store/actions/gardens';

const Gardens = () => {
  const dispatch = useDispatch();
  const gardens = useSelector((state) => state.user.gardens);
  const isGardensLoading = useSelector((state) => state.user.isGardensLoading);

  useEffect(() => {
    dispatch(fetchGardens());
  }, []);

  return (
    <div className="myGarden">
      <UserHeader />
      <Grid container justifyContent="center">
        {gardens && (
          gardens.map((garden) => (
            <Grid item m={3} key={garden.id}>
              <GardensCard
                title={garden.name}
                description="Je ne plante rien mais je récolte tout !!"
                titleSlug={garden.nameSlug}
              />
            </Grid>
          ))
        )}
        {isGardensLoading && (
        <div className="myGarden__container-loader">
          <CircleLoader color="#3d3b2c" size={120} />
        </div>
        )}
      </Grid>
    </div>
  );
};

export default Gardens;
