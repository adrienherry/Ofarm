import React from 'react';

import CarrouselContainer from '../pages/Homepage/CarrouselContainer';
import Register from '../pages/Register';

import HeaderContainer from '../HeaderContainer';

import './app.scss';

const App = () => (
  <div className="app">
    <HeaderContainer />
    {/* <CarrouselContainer /> */}
    <Register />
  </div>
);

export default App;
