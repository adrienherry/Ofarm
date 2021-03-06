import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Grid } from '@material-ui/core';
import './login.scss';
import Field from '../../Field';
import {
  resetErrorLogin, resetReadyToRedirectLogin, sendLoginForm, setLoginField,
} from '../../../store/actions/authentification';

const Login = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const emailLogin = useSelector((state) => state.auth.emailLogin);
  const passwordLogin = useSelector((state) => state.auth.passwordLogin);
  const errorLogin = useSelector((state) => state.auth.errorLogin);
  const readyToRedirect = useSelector((state) => state.auth.readyToRedirect);
  const username = useSelector((state) => state.user.username);

  const history = useHistory();

  const handleChangeField = (value, name) => {
    dispatch(setLoginField(value, name));
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    dispatch(sendLoginForm());
  };

  useEffect(() => {
    if (readyToRedirect) {
      history.goBack();
      dispatch(resetReadyToRedirectLogin());
      dispatch(resetErrorLogin());
      enqueueSnackbar(`Connection réussie, bienvenue ${username}`, { variant: 'success' });
    }
  }, [readyToRedirect]);
  return (
    <div className="login">
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item container alignItems="center" justifyContent="center" lg={11} md={11} sm={11} xs={11}>
          <form className="login__form" onSubmit={handleLoginFormSubmit} autoComplete="off">
            <Grid item lg={11} md={11} sm={12} xs={12}>
              <h3 className="login__title">
                Se connecter:
              </h3>
            </Grid>
            <Grid item container direction="column" lg={12} md={12} sm={12} xs={12} spacing={4}>
              <Grid item>
                <Field
                  value={emailLogin}
                  type="text"
                  name="emailLogin"
                  placeholder="Email"
                  onChange={handleChangeField}
                />
              </Grid>
              <Grid item>
                <Field
                  value={passwordLogin}
                  type="password"
                  name="passwordLogin"
                  placeholder="Mot de passe"
                  onChange={handleChangeField}
                />
              </Grid>
              <Grid item>
                <div className="login__error" style={{ color: 'red' }}>{errorLogin}</div>
              </Grid>
              <Grid item container justifyContent="space-between" alignItems="center">
                <button
                  type="submit"
                  className="login__submit-btn"
                > Se connecter
                </button>
                <Link to="/register">
                  <p className="login__redirect">Vous n'avez pas de compte ? S'inscrire</p>
                </Link>
              </Grid>
            </Grid>

          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
