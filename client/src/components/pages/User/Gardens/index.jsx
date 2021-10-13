import React, { useEffect } from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(fetchGardens());
  }, []);

  return (
    <>
      <UserHeader />
      <div className="myGarden">
        <Grid container justifyContent="center">
          {gardens && (
            gardens.map((garden) => (
              <Grid item mr={isMobile ? 0 : 3} ml={isMobile ? 0 : 3} mb={3} key={garden.id}>
                <GardensCard
                  title={garden.name}
                  description="Je ne plante rien mais je récolte tout !!"
                  titleSlug={garden.nameSlug}
                  id={garden.id}
                />
              </Grid>
            ))
          )}
          {isGardensLoading && !gardens[0] && (
            <div className="myGarden__container-loader">
              <CircleLoader color="#3d3b2c" size={120} />
            </div>
          )}
          {!gardens[0] && (
            <Grid item>
              <div className="myGarden__no-garden">Vous n'avez pas encore de jardin</div>
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
};

export default Gardens;
