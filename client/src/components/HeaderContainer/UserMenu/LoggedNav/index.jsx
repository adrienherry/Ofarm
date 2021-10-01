import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import './logged-nav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../../store/actions/logout';

const LoggedNav = () => {
  const dispatch = useDispatch();
  const usernameSlug = useSelector((state) => state.user.usernameSlug);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickLogout = () => {
    dispatch(logout());
  };
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
          to={`/${usernameSlug}/profile`}
          exact
        >
          <li className="user-menu__item">
            Mon profil
          </li>
        </NavLink>
        <NavLink
          to={`/${usernameSlug}/gardens`}
          exact
        >
          <li className="user-menu__item">
            Mes jardins
          </li>
        </NavLink>
        <NavLink
          to={`/${usernameSlug}/creategarden`}
          exact
        >
          <li className="user-menu__item">
            Créer un jardin
          </li>
        </NavLink>
        <NavLink
          to="/logout"
          exact
        >
          <li className="user-menu__item" onClick={handleClickLogout}>
            Se déconnecter
          </li>
        </NavLink>
      </ul>
    </>
  );
};

export default LoggedNav;
