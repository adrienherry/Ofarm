import React from 'react';
import {
  Stack, Grid, useTheme, useMediaQuery,
} from '@material-ui/core';
import ButtonUserSection from '../ButtonUserSection';
import './user-header.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserHeader = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const usernameSlug = useSelector((state) => state.user.usernameSlug);
  return (
    <header className="user-header">
      <Grid container justifyContent={isMedium ? 'center' : 'space-between'}>
        <Grid item mb={isMedium ? 2 : 0}>
          <NavLink
            to={`/${usernameSlug}/createGarden`}
          >
            <ButtonUserSection name="Créer un nouveau jardin" />
          </NavLink>
        </Grid>
        <Grid item lg={5} md={6} sm={10}>
          <Stack direction="row" spacing={2} justifyContent={isMedium ? 'center' : 'flex-end'}>
            <NavLink
              to={`/${usernameSlug}/gardens`}
            >
              <ButtonUserSection name="Mes jardins" />
            </NavLink>
            <NavLink
              to={`/${usernameSlug}/profile`}
            >
              <ButtonUserSection name="Information personnelles" />
            </NavLink>
          </Stack>
        </Grid>
      </Grid>
    </header>
  );
};

export default UserHeader;
