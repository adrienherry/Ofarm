import React from 'react';

import './app.scss';
import HeaderContainer from '../HeaderContainer';
import HomePage from '../pages/Homepage';
import Register from '../pages/Register';

const App = () => (
  <div className="app">
    <HeaderContainer />
    <HomePage />
    {/* <Register /> */}
  </div>
);

export default App;
