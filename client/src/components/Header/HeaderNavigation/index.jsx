import React from 'react';
import './header-navigation.scss';

import SearchBar from './SearchBar';
import NavBar from './NavBar';
import Authentification from './Authentification';

const HeaderNavigation = () => (
  <div className="header-navigation">
    <SearchBar />
    <NavBar />
    <Authentification />
  </div>
);

export default HeaderNavigation;
