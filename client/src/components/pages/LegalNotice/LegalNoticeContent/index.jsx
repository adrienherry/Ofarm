import React from 'react';
import './legal-notice-content.scss';
import PropTypes from 'prop-types';

const LegalNoticeContent = ({ titre, text }) => (

  <div className="content">
    <h1 className="content__title">{titre}</h1>
    <p className="content__text">{text}</p>
  </div>

);

export default LegalNoticeContent;
