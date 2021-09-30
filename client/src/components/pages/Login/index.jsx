import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import './login.scss';
import Field from '../../Field';
import { sendLoginForm, setLoginField } from '../../../store/actions/authentification';

const Login = () => {
  const dispatch = useDispatch();
  const emailLogin = useSelector((state) => state.auth.emailLogin);
  const passwordLogin = useSelector((state) => state.auth.passwordLogin);
  const isReadyToRedirect = useSelector((state) => state.auth.isReadyToRedirect);

  if (isReadyToRedirect) return <Redirect to="/" exact />;

  const handleChangeField = (value, name) => {
    dispatch(setLoginField(value, name));
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    dispatch(sendLoginForm());
  };

  return (
    <div className="login">
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item container alignItems="center" justifyContent="center" lg={11} md={11} sm={11} xs={11}>
          <form className="login__form" onSubmit={handleLoginFormSubmit}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
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
                <button
                  type="submit"
                  className="login__submit-btn"
                > Se connecter
                </button>
              </Grid>
            </Grid>

          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
