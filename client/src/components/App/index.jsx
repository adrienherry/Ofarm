import React from 'react';

import Carrousel from '../pages/Homepage/Carrousel';
import Register from '../pages/Register';

import filip from '../pages/Homepage/Carrousel/carrousel_images/filip-urban-unsplash.jpg';
import markus1 from '../pages/Homepage/Carrousel/carrousel_images/markus-spiske-sF-unsplash.jpg';
import sandie from '../pages/Homepage/Carrousel/carrousel_images/sandie-clarke-unsplash.jpg';
import lool from '../pages/Homepage/Carrousel/carrousel_images/markus-spiske-unsplash.jpg';
import danm from '../pages/Homepage/Carrousel/carrousel_images/markus-spiske-ZS-unsplash.jpg';

import HeaderContainer from '../HeaderContainer';

import './app.scss';

const App = () => (
  <div className="app">
    <HeaderContainer />
    <Carrousel filip={filip} markus1={markus1} sandie={sandie} lool={lool} danm={danm} />
    <Register />
  </div>
);

export default App;
