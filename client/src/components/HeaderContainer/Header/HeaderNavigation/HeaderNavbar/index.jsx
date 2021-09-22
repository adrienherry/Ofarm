import React from 'react';
import { NavLink } from 'react-router-dom';
import './header-navbar.scss';
import { Grid } from '@material-ui/core';

const NavBar = () => (
  <nav className="header-navbar">
    <ul className="header-navbar__container">
      <Grid container spacing={2}>
        <Grid item>
          <NavLink
            className="header-navbar__link"
            activeClassName="header-navbar__link--active"
            to="/species"
            exact
          >
            <li className="header-navbar__item">
              Espèces
            </li>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            className="header-navbar__link"
            activeClassName="header-navbar__link--active"
            to="/about"
            exact
          >
            <li className="header-navbar__item">
              À propos
            </li>
          </NavLink>
        </Grid>
      </Grid>
    </ul>
  </nav>
);

export default NavBar;
