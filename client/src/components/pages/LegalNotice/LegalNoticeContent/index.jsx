import React from 'react';
import './legal-notice-content.scss';
import PropTypes from 'prop-types';

const LegalNoticeContent = ({ titre, text }) => (

  <div className="content">

    <p className="content__titre">{titre}</p>
    <p className="content__text">{text}</p>

  </div>

);

// LegalNoticeContent.propTypes = {
//   titre: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

export default LegalNoticeContent;
