import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const HeaderContainer = () => (
  <div className="header-container">
    <Header />
    <UserMenu />
    <SearchBar />
  </div>
);

export default HeaderContainer;
