import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import './not-logged-nav.scss';

const NotLoggedNav = () => {
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
          to="/login"
        >
          <li className="user-menu__item">
            Se connecter
          </li>
        </NavLink>
        <NavLink
          to="/register"
        >
          <li className="user-menu__item">
            S'inscrire
          </li>
        </NavLink>
      </ul>
    </>
  );
};

export default NotLoggedNav;
