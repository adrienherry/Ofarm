import React from 'react';
import {
  FaGithub, FaTwitter, FaFacebook, FaPhoneAlt, FaArrowCircleUp,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

import logo from '../../../public/logo_ofarm.png';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <div className="footer__container--logo">
        <img src={logo} alt="logo" className="footer__container--logo-img" />
        <div className="footer__container--logo-social">
          <FaGithub className="footer__container--logo-social-github" size={30} />
          <FaTwitter className="footer__container--logo-social-twitter" size={30} />
          <FaFacebook className="footer__container--logo-social-facebook" size={30} />
          <FaPhoneAlt className="footer__container--logo-social-phone" size={30} />
        </div>
      </div>
      <div className="footer__container--section">
        <h3 className="footer__container--section-title"> Utilisateurs </h3>
        <ul className="footer__container--section-list">
          <li className="footer__container--section-list-item"> Inscription </li>
          <li className="footer__container--section-list-item"> Profil </li>
          <li className="footer__container--section-list-item"> Blog </li>
        </ul>
      </div>
      <div className="footer__container--section">
        <h3 className="footer__container--section-title"> Gardens </h3>
        <ul className="footer__container--section-list">
          <li className="footer__container--section-list-item"> Espèces </li>
          <li className="footer__container--section-list-item"> Variétés </li>
          <li className="footer__container--section-list-item"> Garden </li>
        </ul>
      </div>
      <div className="footer__container--section">
        <h3 className="footer__container--section-title"> About </h3>
        <ul className="footer__container--section-list">
          <li className="footer__container--section-list-item"> À propos </li>
          <li className="footer__container--section-list-item"> Mention légales </li>
          <li className="footer__container--section-list-item"> Contact </li>
        </ul>
      </div>
      <div className="footer__container--copyright">
        <p className="footer__container--copyright-text"> Copyright </p>
        <FaArrowCircleUp className="footer__container--copyright" size={40} />
      </div>
    </div>
  </div>
);

Footer.propTypes = {

};

export default Footer;
