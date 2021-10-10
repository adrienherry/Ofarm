import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { openUserMenu } from '../../../store/actions/user';
import SearchBar from '../../HeaderContainer/SearchBar';
import './redesign-header.scss';
import logo from '/logo_ofarm_2.png';
import farmerImage from '/icons8-farmer-60.png';

const RedesignHeader = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.logged);
  const is1360 = useMediaQuery('(min-width: 1360px)');
  const is1150 = useMediaQuery('(min-width: 1150px)');

  const handleUserIconClick = () => {
    dispatch(openUserMenu());
  };

  return (
    <div className="redesign-header">
      <div className="redesign-header__left-container">
        <Link
          to="/"
        >
          <div className="redesign-header__title">
            <span className="redesign-header__title-span">O'</span>Farm
          </div>
        </Link>
        <nav className="redesign-header__navbar" style={is1360 ? {} : { margin: '1rem' }}>
          <NavLink
            className="redesign-header__navbar-link"
            activeClassName="redesign-header__navbar-link--active"
            to="/"
            exact
          >
            <div className="redesign-header__navbar-item">
              Home
            </div>
          </NavLink>
          <NavLink
            className="redesign-header__navbar-link"
            activeClassName="redesign-header__navbar-link--active"
            to="/species"
            exact
          >
            <div className="redesign-header__navbar-item">
              Espèces
            </div>
          </NavLink>
        </nav>
      </div>
      <div className="redesign-header__searchbar-container">
        <SearchBar />
      </div>
      {logged && (
        <div
          onClick={handleUserIconClick}
          className="redesign-header__profile-image"
          style={{ backgroundImage: `url(${farmerImage})` }}
        />
      )}
      {!logged && (
      <div className="redesign-header__connection" style={is1360 ? {} : { right: '0' }}>
        <Link
          to="/login"
        >
          <div className="redesign-header__connection__item">
            Se connecter
          </div>
        </Link>
        <Link
          to="/register"
        >
          <div className="redesign-header__connection__item">
            S'inscrire
          </div>
        </Link>
      </div>
      )}
    </div>
  );
};

export default RedesignHeader;
