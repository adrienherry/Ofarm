import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import './register.scss';
import Field from '../../Field';
import { setRegisterField } from '../../../store/actions/register';

const Login = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.register.username);
  const email = useSelector((state) => state.register.email);
  const password = useSelector((state) => state.register.password);
  const confirmPassword = useSelector((state) => state.register.confirmPassword);

  const handleChangeField = (value, name) => {
    dispatch(setRegisterField(value, name));
  };

  return (
    <div className="register">
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item container alignItems="center" justifyContent="center" lg={11} md={11} sm={11} xs={11}>
          <form className="register__form">
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <h3 className="register__title">
                S'inscrire:
              </h3>
            </Grid>
            <Grid item container direction="column" lg={12} md={12} sm={12} xs={12} spacing={3}>
              <Grid item>
                <Field
                  value={username}
                  type="text"
                  name="username"
                  placeholder="Nom d'utilisateur"
                  onChange={handleChangeField}
                />
              </Grid>
              <Grid item>
                <Field
                  value={email}
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChangeField}
                />
              </Grid>
              <Grid item>
                <Field
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  onChange={handleChangeField}
                />
              </Grid>
              <Grid item>
                <Field
                  value={confirmPassword}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmez votre mot de passe"
                  onChange={handleChangeField}
                />
              </Grid>
              <Grid item>
                <button
                  type="submit"
                  className="register__submit-btn"
                > S'inscrire
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
