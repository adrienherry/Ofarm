import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { HiMenu } from 'react-icons/hi';
import './header.scss';

import { useDispatch } from 'react-redux';
import Headerlogo from './HeaderLogo';
import HeaderNavigation from './HeaderNavigation';
import { openUserMenu } from '../../../store/actions/user';

const Header = () => {
  const dispatch = useDispatch();
  const handleMobileMenuIcon = () => {
    dispatch(openUserMenu());
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <header className="header">
      <Grid container flexDirection="space-between" alignItems="center">
        <Grid item lg={4} md={4} xs={10}>
          <Headerlogo />
        </Grid>
        {!isMobile && (
        <Grid item lg={8} md={8} xs={2}>
          <HeaderNavigation />
        </Grid>
        )}
        {isMobile && (
          <div className="mobile-menu-icon" onClick={handleMobileMenuIcon}>
            <HiMenu size={32} color="#a7bbac" />
          </div>
        )}
      </Grid>
    </header>

  );
};

export default Header;
