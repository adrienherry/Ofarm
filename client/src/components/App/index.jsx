
import React, { useEffect } from 'react';

import './app.scss';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HeaderContainer from '../HeaderContainer';
import HomePage from '../pages/Homepage';
import Register from '../pages/Register';
import Species from '../pages/Species';
import Footer from '../Footer';
import UserProfil from '../pages/UserProfil';
import Login from '../pages/Login';
import { collapseUserMenu } from '../../store/actions/user';
import CreateGarden from '../pages/User/CreateGarden';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(collapseUserMenu());
  }, [location]);

  return (
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
        {/* <CreateGarden /> */}
        {/* <UserProfil /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
