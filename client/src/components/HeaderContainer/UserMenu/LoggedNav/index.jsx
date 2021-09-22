import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import './logged-nav.scss';

const LoggedNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <ul className="user-menu__container">
        {isMobile && (
        <>
          <NavLink
            to="/species"
          >
            <li className="user-menu__item">
              Espèces
            </li>
          </NavLink>
          <NavLink
            to="/about"
          >
            <li className="user-menu__item">
              À propos
            </li>
          </NavLink>
        </>
        )}
        <NavLink
          to="/"
          exact
        >
          <li className="user-menu__item">
            Mon profil
          </li>
        </NavLink>
        <NavLink
          to="/"
          exact
        >
          <li className="user-menu__item">
            Mes jardins
          </li>
        </NavLink>
        <NavLink
          to="/logout"
          exact
        >
          <li className="user-menu__item">
            Se déconnecter
          </li>
        </NavLink>
      </ul>
    </>
  );
};

export default LoggedNav;
