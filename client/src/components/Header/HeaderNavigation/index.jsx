import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HiUserCircle } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import './header-navigation.scss';

import { useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import HeaderNavbar from './HeaderNavbar';
import { openUserMenu } from '../../../store/actions/user';

const HeaderNavigation = () => {
  const dispatch = useDispatch();

  const handleUserIconClick = () => {
    dispatch(openUserMenu());
  };

  return (
    <div className="header-navigation">
      <Grid container alignItems="center">
        <Grid item lg={8} md={7}>
          <SearchBar />
        </Grid>
        <Grid item lg={3} md={3}>
          <HeaderNavbar />
        </Grid>
        <div className="header-navigation__user-icon" onClick={handleUserIconClick}>
          <Grid item lg={1} md={2}>
            <IconContext.Provider value={{
              color: '#bdbdbd',
              size: '65px',
            }}
            >
              <HiUserCircle />
            </IconContext.Provider>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default HeaderNavigation;
