import React from 'react';
import {
  Stack, Grid, useTheme, useMediaQuery,
} from '@material-ui/core';
import ButtonUserSection from '../ButtonUserSection';
import './user-header.scss';

const UserHeader = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <header className="user-header">
      <Grid container justifyContent={isMedium ? 'center' : 'space-between'}>
        <Grid item mb={isMedium ? 4 : 0} lg={4} md={5} sm={10}>
          <ButtonUserSection name="Créer un nouveau jardin" />
        </Grid>
        <Grid item lg={5} md={6} sm={10}>
          <Stack direction="row" spacing={2} justifyContent={isMedium ? 'flex-start' : 'flex-end'}>
            <ButtonUserSection name="Mes jardins" />
            <ButtonUserSection name="Information personnelles" disabled />
          </Stack>
        </Grid>
      </Grid>
    </header>
  );
};

export default UserHeader;
