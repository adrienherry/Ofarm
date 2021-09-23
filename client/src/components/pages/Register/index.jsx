/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addForm, setConfigPassword, setConfirmEmail, setEmail, setPassword, setUsername,
} from '../../../store/actions/register';
import './register.scss';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.register.username);
  const email = useSelector((state) => state.register.email);
  const confirmEmail = useSelector((state) => state.register.confirmEmail);
  const password = useSelector((state) => state.register.password);
  const confirmPassword = useSelector((state) => state.register.confirmPassword);

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
    dispatch(setConfigPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addForm());
  };

  return (
    <div className="registerForm">
      <form onSubmit={handleSubmit} autoComplete="on" className="registerForm__formulary">
        <label className="registerForm__formulary-signup"> Signup </label>
        <input
          className="registerForm__formulary-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
          require
        />
        <input
          className="registerForm__formulary-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        />
        <input
          className="registerForm__formulary-input"
          type="email"
          placeholder="Confirm email"
          value={confirmEmail}
          onChange={handleConfirmEmail}
          required
        />
        <input
          className="registerForm__formulary-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          required
        />
        <input
          className="registerForm__formulary-input"
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          autoComplete="off"
          required
        />
        <input
          className="registerForm__formulary-checkbox"
          type="checkbox"
          // checked={checked}
          // onChange={handleChecked}
        /> I agree to the terms & conditions
        <button className="registerForm__formulary-button" type="submit"> Signup </button>
      </form>
    </div>
  );
};

export default RegisterForm;
