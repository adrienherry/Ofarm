import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import './login.scss';
import Field from '../../Field';
import { setLoginField } from '../../../store/actions/authentification';

const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const handleChangeField = (value, name) => {
    dispatch(setLoginField(value, name));
  };

  return (
    <div className="login">
      <form>
        <Grid container direction="row" justifyContent="center" spacing={4}>
          <Grid item lg={5} md={5} sm={5} xs={10}>
            <h3 className="login__title">
              Connectez-vous:
            </h3>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} />
          <Grid item container direction="column" lg={5} md={5} sm={5} xs={10} spacing={5}>
            <Grid item>
              <Field
                value={email}
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChangeField}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} />
            <Grid item>
              <Field
                value={password}
                type="password"
                name="password"
                placeholder="Mot de passe"
                onChange={handleChangeField}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} />
            <Grid item>
              <button
                type="submit"
                className="login__submit-btn"
              > Se connecter
              </button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
