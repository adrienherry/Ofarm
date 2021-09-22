import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import LoggedNav from './LoggedNav';
import NotLoggedNav from './NotLoggedNav';
import './user-menu.scss';
import { collapseUserMenu } from '../../../store/actions/user';

const UserMenu = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.logged);
  const userMenuIsOpen = useSelector((state) => state.user.userMenuIsOpen);
  const userMenuRef = useRef();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  const userMenuStyle = {
    width: isMedium ? '100%' : '15rem',
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
      {userMenuIsOpen && (
        <nav
          className="user-menu"
          ref={userMenuRef}
          style={userMenuStyle}
        >
          {!logged && (
          <NotLoggedNav />
          )}
          {logged && (
          <LoggedNav />
          )}
        </nav>
      )}
    </>
  );
};

export default UserMenu;
