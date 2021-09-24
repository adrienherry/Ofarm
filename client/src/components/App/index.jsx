import React from 'react';

import './app.scss';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from '../HeaderContainer';
import HomePage from '../pages/Homepage';
import Register from '../pages/Register';
import Species from '../pages/Species';
// import Footer from '../Footer';
import Login from '../pages/Login';

const App = () => (
  <div className="app">
    <div className="app__container">
      <HeaderContainer />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/species" exact>
          <Species />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
      </Switch>
      <Footer />
    </div>
  </div>
);

export default App;
