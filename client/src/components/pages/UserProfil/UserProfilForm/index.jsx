import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { addProfil, setProfilField } from '../../../../store/actions/profil';
import Field from '../../../Field';
import './userProfilForm.scss';

const UserProfilForm = ({
  button, usernameProfil, emailProfil,
}) => {
  const dispatch = useDispatch();

  const handleChangeField = (value, name) => {
    dispatch(setProfilField(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProfil());
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Grid container direction="column" spacing={3} justifyContent="center">
        <Grid item>
          <Field
            type="text"
            name="usernameProfil"
            placeholder="Nom d'utilisateur"
            value={usernameProfil}
            onChange={handleChangeField}
          />
        </Grid>
        <Grid item>
          <Field
            type="email"
            name="emailProfil"
            placeholder="Email"
            value={emailProfil}
            onChange={handleChangeField}
          />
        </Grid>
        {/* <Grid item>
          <Field
            type="password"
            name="passwordProfil"
            placeholder="Password"
            value={passwordProfil}
            onChange={handleChangeField}
          />
        </Grid> */}
        <Grid item>
          <button type="submit" className="form__submit"> {button} </button>
        </Grid>
      </Grid>
    </form>
  );
};

UserProfilForm.propTypes = {
  button: PropTypes.string.isRequired,
};

export default UserProfilForm;
