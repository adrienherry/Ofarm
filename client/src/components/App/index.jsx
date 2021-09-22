import React from 'react';

import CarrouselContainer from '../pages/Homepage/CarrouselContainer';
import Register from '../pages/Register';
import Footer from '../Footer';
import HeaderContainer from '../HeaderContainer';

import './app.scss';

const App = () => (
  <div className="app">
    <HeaderContainer />
    {/* <CarrouselContainer /> */}
    <Register />
    <Footer />
  </div>
);

export default App;
