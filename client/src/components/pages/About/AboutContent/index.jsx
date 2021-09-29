import React from 'react';
import './AboutContent.scss';
import PropTypes from 'prop-types';

const AboutContent = ({ titre, text }) => (

  <div className="content">

    <p className="content__titre">{titre}</p>
    <p className="content__text">{text}</p>

  </div>

);

AboutContent.propTypes = {
  titre: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutContent;
