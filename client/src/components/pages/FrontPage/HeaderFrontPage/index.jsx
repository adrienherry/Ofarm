import React from 'react';
import PropTypes from 'prop-types';
import './headerFrontPage.scss';
import { Button } from '@material-ui/core';
import logo from '/public/logo_ofarm.png';

const HeaderFrontPage = () => (
  <header className="headerFrontPage">
    <figure className="headerFrontPage__figure">
      <img src={logo} alt="logo" width="100em" height="100em" />
      <figcaption className="headerFrontPage__figure--slogan">O'Farm</figcaption>
    </figure>
    <nav className="headerFrontPage__navigation">
      <ul className="headerFrontPage__navigation--list">
        <li>Home</li>
        <li>Mes jardins</li>
        <li>Espèces</li>
        <li>Équipe</li>
        <li>À propos</li>
      </ul>
    </nav>
    <Button variant="contained" sx={{ borderRadius: '1em', marginLeft: 'auto' }}>login</Button>
  </header>
);

HeaderFrontPage.propTypes = {
    
};

export default HeaderFrontPage;
