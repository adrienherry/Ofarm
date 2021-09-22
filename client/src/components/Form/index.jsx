import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setUsername, setEmail, setConfirmEmail, setConfimPassword, setPassword,
} from '../../store/actions/form';
import './form.scss';

const Form = ({ signup }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.form.username);
  const email = useSelector((state) => state.form.email);
  const confirmEmail = useSelector((state) => state.form.confirmEmail);
  const password = useSelector((state) => state.form.password);
  const confirmPassword = useSelector((state) => state.form.confirmPassword);

  const handleUsername = (event) => {
    dispatch(setUsername(event.target.value));
  };

  const handleEmail = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handleConfirmEmail = (event) => {
    dispatch(setConfirmEmail(event.target.value));
  };

  const handlePassword = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleConfirmPassword = (event) => {
    dispatch(setConfimPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
          required
          autoComplete="on"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
          autoComplete="on"
        />
        <input
          type="text"
          placeholder="Confirm email"
          value={confirmEmail}
          onChange={handleConfirmEmail}
          required
          autoComplete="on"
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          min="6"
          required
          autoComplete="on"
        />
        <input
          type="text"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          min="6"
          required
          autoComplete="on"
        />
        <button type="submit"> {signup} </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  signup: PropTypes.string.isRequired,
};

export default Form;
