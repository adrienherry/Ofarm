import React, { useEffect } from 'react';

import './app.scss';
import {
  Switch, Route, useLocation, Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderContainer from '../HeaderContainer';
import HomePage from '../pages/Homepage';
import Register from '../pages/Register';
import Species from '../pages/Species';
import Footer from '../Footer';
import UserProfil from '../pages/User/UserProfil';
import NotFound from '../pages/NotFound';
import Team from '../pages/Team';
import Login from '../pages/Login';
import Gardens from '../pages/User/Gardens';
import About from '../pages/About';
import LegalNotice from '../pages/LegalNotice';
import { collapseUserMenu, setUserInfo, setUserToken } from '../../store/actions/user';
import CreateGarden from '../pages/User/CreateGarden';
import { isConnected, setLoggedToTrue } from '../../store/actions/authentification';
import IndividualSpecies from '../pages/IndividualSpecies';
import { setIsReadyToRedirectToLoginToFalse } from '../../store/actions/register';
import { resetSpecies } from '../../store/actions/species';
import IndividualGarden from '../pages/User/IndividualGarden';
import RedesignHeaderContainer from '../RedesignHeaderContainer';
import UserMenuRedesign from '../UserMenuRedesign';
import RedesignFooter from '../RedesignFooter';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const logged = useSelector((state) => state.auth.logged);
  const userMenuIsOpen = useSelector((state) => state.user.userMenuIsOpen);
  const usernameSlug = useSelector((state) => state.user.usernameSlug);

  useEffect(() => {
    dispatch(collapseUserMenu());
    dispatch(setIsReadyToRedirectToLoginToFalse());
    dispatch(resetSpecies());
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      dispatch(setUserToken(localStorage.getItem('jwt')));
      dispatch(isConnected());
    }
  }, []);

  useEffect(() => {
    if (userMenuIsOpen) {
      document.querySelector('body').style.overflow = 'hidden';
    }
    if (!userMenuIsOpen) {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [userMenuIsOpen]);

  return (
    <div className="app">
      <div className="app__container" style={userMenuIsOpen ? { filter: 'blur(3px) grayscale(90%)', pointerEvents: 'none' } : {}}>
        <RedesignHeaderContainer />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/species" exact>
            <Species />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/team" exact>
            <Team />
          </Route>
          <Route path="/terms" exact>
            <LegalNotice />
          </Route>
          <Route path="/species/:slug" exact component={IndividualSpecies} />
          {logged && (
          <Route path={`/${usernameSlug}/createGarden`} exact>
            <CreateGarden />
          </Route>
          )}
          {logged && (
          <Route path={`/${usernameSlug}/profile`} exact>
            <UserProfil />
          </Route>
          )}
          {logged && (
          <Route path={`/${usernameSlug}/gardens`} exact>
            <Gardens />
          </Route>
          )}
          {logged && (
          <Route path={`/${usernameSlug}/gardens/:slug`} exact>
            <IndividualGarden />
          </Route>
          )}
          <Redirect from="/logout" to="/login" />
          <Route>
            <NotFound />
          </Route>
        </Switch>
        {/* <Footer /> */}
        <RedesignFooter />
      </div>
      <UserMenuRedesign />
    </div>
  );
};

export default App;
