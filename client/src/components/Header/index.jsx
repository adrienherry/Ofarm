import React from 'react';
import './header.scss';

import Headerlogo from './HeaderLogo';
import HeaderNavigation from './HeaderNavigation';

const Header = () => (
  <div className="header">
    <Headerlogo />
    <HeaderNavigation />
  </div>
);

export default Header;
