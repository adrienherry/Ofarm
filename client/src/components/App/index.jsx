import React from 'react';

import './app.scss';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from '../HeaderContainer';
import HomePage from '../pages/Homepage';
import Register from '../pages/Register';
import Species from '../pages/Species';
import Footer from '../Footer';

const App = () => (
  <div className="app">
    <HeaderContainer />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/species">
        <Species />
      </Route>
   </Switch>
    {/* <Register /> */}
   <Footer />
  </div>
);

export default App;
