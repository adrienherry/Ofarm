import React, { useEffect, useRef } from 'react';
import './user-menu-redesign.scss';
import { IoClose } from 'react-icons/io5';
import { useTransition, animated } from 'react-spring';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { collapseUserMenu } from '../../store/actions/user';
import SearchBar from '../HeaderContainer/SearchBar';
import farmerImage from '/icons8-farmer-60.png';
import { logout } from '../../store/actions/logout';

const UserMenuRedesign = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const userMenuIsOpen = useSelector((state) => state.user.userMenuIsOpen);
  const logged = useSelector((state) => state.auth.logged);
  const userMenuRef = useRef();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  const transition = useTransition(userMenuIsOpen, {
    from: { x: 900, y: 0, opacity: 1 },
    enter: {
      x: 0, y: 0, opacity: 1, width: isMedium ? '100%' : '',
    },
    leave: { x: 900, y: 0, opacity: 1 },
  });

  const handleCloseMenuClick = () => {
    dispatch(collapseUserMenu());
  };

  const handleClickLogout = () => {
    dispatch(logout());
    enqueueSnackbar('Déconnexion réussie', { variant: 'success' });
  };

  useEffect(() => {
    const maybeHandler = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        dispatch(collapseUserMenu());
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return (
    <>
      {transition((style, item) => item && (
        <animated.div className="user-menu-redesign" style={style} ref={userMenuRef}>
          <div className="user-menu-redesign__container">
            <IoClose
              onClick={handleCloseMenuClick}
              className="user-menu-redesign__close-icon"
              size={20}
            />
            <div
              className="user-menu-redesign__profile-image"
              style={{ backgroundImage: `url(${farmerImage})` }}
            />
            <div className="user-menu-redesign__username">{username}</div>
            {isMedium && (
            <div className="user-menu-redesign__searchbar-container">
              <SearchBar />
            </div>
            )}
            <div className="user-menu-redesign__container-link">
              <Link
                to="/"
                exact
              >
                <div className="user-menu-redesign__link">
                  ACCUEIL
                </div>
              </Link>
              <Link
                to="/species"
                exact
              >
                <div className="user-menu-redesign__link">
                  ESPECES
                </div>
              </Link>
              <Link
                to="/advice"
                exact
              >
                <div className="user-menu-redesign__link">
                  CONSEILS
                </div>
              </Link>
              {isMedium && !logged && (
              <>
                <Link
                  to="/login"
                  exact
                >
                  <div className="user-menu-redesign__link">
                    SE CONNECTER
                  </div>
                </Link>
                <Link
                  to="/register"
                  exact
                >
                  <div className="user-menu-redesign__link">
                    S'INSCRIRE
                  </div>
                </Link>
              </>
              )}
              {logged && (
              <>
                <Link
                  to="/createGarden"
                  exact
                >
                  <div className="user-menu-redesign__link">
                    CREATION D'UN JARDIN
                  </div>
                </Link>
                <Link
                  to="/gardens"
                  exact
                >
                  <div className="user-menu-redesign__link">
                    MES JARDINS
                  </div>
                </Link>
                <Link
                  to="/profile"
                  exact
                >
                  <div className="user-menu-redesign__link">
                    MON PROFIL
                  </div>
                </Link>
                <Link
                  to="/logout"
                  exact
                >
                  <div
                    className="user-menu-redesign__link"
                    onClick={handleClickLogout}
                  >
                    SE DÉCONNECTER
                  </div>
                </Link>
              </>
              )}
            </div>
          </div>
        </animated.div>
      ))}
    </>
  );
};

export default UserMenuRedesign;
