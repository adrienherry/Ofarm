import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  updateProfilInfo,
  setUserEnabled,
  setUserDisabled,
  setUserDisabled2,
  setUsernameProfil,
  setEmailProfil,
  setUserEnabled2,
} from '../../../../../store/actions/profil';
import './userProfilForm.scss';

const UserProfilForm = ({
  button, usernameProfil, emailProfil,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const inputUsername = useRef();
  const inputEmail = useRef();
  const disabled = useSelector((state) => state.profil.disabled);
  const disabled2 = useSelector((state) => state.profil.disabled2);

  const handleChangeFieldUsernameProfil = (event) => {
    dispatch(setUsernameProfil(event.target.value));
  };

  const handleChangeFieldEmailProfil = (event) => {
    dispatch(setEmailProfil(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProfilInfo());
  };
  const handleClick = () => {
    dispatch(setUserDisabled());
  };
  const handleClick2 = () => {
    dispatch(setUserDisabled2());
  };

  useEffect(() => {
    const maybeHandler = (event) => {
      if (inputUsername.current && !inputUsername.current.contains(event.target)) {
        dispatch(setUserEnabled());
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  useEffect(() => {
    const maybeHandler = (event) => {
      if (inputEmail.current && !inputEmail.current.contains(event.target)) {
        dispatch(setUserEnabled2());
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return (
    <form onSubmit={handleSubmit} className="form-user-profil">
      <Grid container direction="column" justifyContent="center">
        <Grid item mb={3}>
          <div className="blockField">
            <label
              htmlFor="field-usernameProfil"
              className="blockField__label"
            >
              Nom d'utilisateur
              <input
                id="field-usernameProfil"
                type="text"
                name="usernameProfil"
                className="blockField__input"
                placeholder="Nom d'utilisateur"
                value={usernameProfil}
                onChange={handleChangeFieldUsernameProfil}
                disabled={disabled}
                ref={inputUsername}
              />
            </label>
            <button
              type="button"
              className="blockField__button"
              onClick={handleClick}
            > Modifier
            </button>
          </div>
        </Grid>
        <Grid item mb={3}>
          <div className="blockField">
            <label
              htmlFor="field-emailProfil"
              className="blockField__label"
            >
              Email
              <input
                id="field-emailProfil"
                type="text"
                name="emailProfil"
                className="blockField__input"
                placeholder="Email"
                value={emailProfil}
                onChange={handleChangeFieldEmailProfil}
                disabled={disabled2}
                ref={inputEmail}
              />
            </label>
            <button
              type="button"
              className="blockField__button"
              onClick={handleClick2}
            > Modifier
            </button>
          </div>
        </Grid>
        <Grid item>
          <button type="submit" className="form-user-profil__submit"> {button} </button>
        </Grid>
      </Grid>
    </form>
  );
};

UserProfilForm.propTypes = {
  button: PropTypes.string.isRequired,
};

export default UserProfilForm;
