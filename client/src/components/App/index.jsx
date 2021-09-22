import React from 'react';

import './app.scss';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from '../HeaderContainer';
import HomePage from '../pages/Homepage';
import Register from '../pages/Register';

const App = () => (
  <div className="app">
    <HeaderContainer />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
    {/* <Register /> */}
  </div>
);

export default App;
