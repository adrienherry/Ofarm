import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { makeStyles } from '@mui/styles';
import { InputAdornment } from '@material-ui/core';
import ModeIcon from '@mui/icons-material/Mode';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { TextField } from '@mui/material';
import {
  profilUsername, profilName, profilEmail, profilPassword, addProfil,
} from '../../../../store/actions/profil';
import Field from '../../../Field';
import './userProfilForm.scss';

const UserProfilForm = ({ button }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.profil.username);
  const name = useSelector((state) => state.profil.name);
  const email = useSelector((state) => state.profil.email);
  const password = useSelector((state) => state.profil.password);

  const handleUsername = (event) => {
    dispatch(profilUsername(event.target.value));
  };

  const handleName = (event) => {
    dispatch(profilName(event.target.value));
  };

  const handleEmail = (event) => {
    dispatch(profilEmail(event.target.value));
  };

  const handlePassword = (event) => {
    dispatch(profilPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProfil());
  };

  // const useStyles = makeStyles(() => ({
  //   root: {
  //     marginInline: 100,
  //   },
  // }));

  // const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className="form">
      <Field
        // className={classes.root}
        type="text"
        name="username"
        placeholder="Prénom"
        value={username}
        onChange={handleUsername}
        helperText="Please enter your name"
        endAdornment={(
          <InputAdornment position="end">
            <ModeIcon />
          </InputAdornment>
      )}
      />
      <Field
        type="text"
        name="name"
        placeholder="Nom"
        value={name}
        onChange={handleName}
      />
      <Field
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleEmail}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handlePassword}
      />
      <button type="submit" className="form__submit"> {button} </button>
    </form>
  );
};

UserProfilForm.propTypes = {
  button: PropTypes.string.isRequired,
};

export default UserProfilForm;
