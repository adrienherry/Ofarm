import React from 'react';
import { Link } from 'react-router-dom';
import './header-logo.scss';
import logo from '/logo_ofarm.png';

const Headerlogo = () => (
  <div className="header-logo">
    <Link
      to="/"
      exact
      className="header-logo__link"
    >
      <img src={logo} alt="logo ofarm" className="header-logo__image" />
    </Link>
    <h1 className="header-logo__description">
      L’appli’ qui t’aide à faire pousser tes légumes à domicile, où que tu sois !
    </h1>
  </div>
);

export default Headerlogo;
