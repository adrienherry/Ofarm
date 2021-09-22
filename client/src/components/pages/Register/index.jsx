import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addForm, setConfigPassword, setConfirmEmail, setEmail, setPassword, setUsername } from '../../../store/actions/form';
import './register.scss';

const RegisterForm = () => {
  const dispatch = useDispatch()
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
    dispatch(setConfigPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addForm())
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit} autoComplete="on">
        <label> Signup </label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
          require
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        />
        <input
          type="email"
          placeholder="Confirm email"
          value={confirmEmail}
          onChange={handleConfirmEmail}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          autoComplete="off"
          required
        />
        <button type="submit"> Signup </button>
      </form>
    </div>
  );
};

export default RegisterForm;