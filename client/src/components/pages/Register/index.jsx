import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Grid } from '@material-ui/core';
import './register.scss';
import Field from '../../Field';
import {
  sendRegisterForm,
  setRegisterField,
  setIsConfirmedToTrue,
  setIsConfirmedToFalse,
  setErrorEmailRegister,
  resetErrorEmailRegister,
  setEmptyRegisterField,
  resetEmptyRegisterField,
  setReadyToSendToFalse,
  resetRegisterInfo,
} from '../../../store/actions/register';
import validateEmail from '../../../utils/validateEmail';

const Login = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const username = useSelector((state) => state.register.username);
  const email = useSelector((state) => state.register.email);
  const password = useSelector((state) => state.register.password);
  const confirmPassword = useSelector((state) => state.register.confirmPassword);
  const isConfirmed = useSelector((state) => state.register.isConfirmed);
  const errorEmail = useSelector((state) => state.register.errorEmail);
  const emptyField = useSelector((state) => state.register.emptyField);
  const readyToSend = useSelector((state) => state.register.readyToSend);
  const alreadyExistError = useSelector((state) => state.register.alreadyExistError);

  const handleChangeField = (value, name) => {
    dispatch(setRegisterField(value, name));
  };

  const handleRegisterFormSubmit = (event) => {
    event.preventDefault();
    dispatch(sendRegisterForm());
  };

  useEffect(() => {
    if (readyToSend) {
      history.push('/');
      dispatch(resetRegisterInfo());
      dispatch(setReadyToSendToFalse());
      enqueueSnackbar(`Inscription réussie, bienvenue ${username}`, { variant: 'success' });
    }
  }, [readyToSend]);

  return (
    <div className="register">
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item container alignItems="center" justifyContent="center" lg={11} md={11} sm={11} xs={11}>
          <form className="register__form" onSubmit={handleRegisterFormSubmit} autoComplete="off">
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
                {errorEmail && (
                <p style={{ color: 'red' }}>{errorEmail}</p>
                )}
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
              {emptyField && (
                <Grid item>
                  <p style={{ color: 'red' }}>{emptyField}</p>
                </Grid>
              )}
              {!isConfirmed && (
                <Grid item>
                  <p style={{ color: 'red' }}>Votre mot de passe n'est pas le même</p>
                </Grid>
              )}
              {alreadyExistError && (
                <Grid item>
                  <p style={{ color: 'red' }}>{alreadyExistError}</p>
                </Grid>
              )}
              <Grid item container justifyContent="space-between" alignItems="center">
                <button
                  type="submit"
                  className="register__submit-btn"
                > S'inscrire
                </button>
                <Link to="/login">
                  <p className="register__redirect">Vous avez déjà un compte ? Se connecter</p>
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
