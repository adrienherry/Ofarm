import React from 'react';
import './AboutContent.scss';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@material-ui/core';

const AboutContent = ({ titre, text }) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className="content">
      <p className="content__titre">{titre}</p>
      <p className="content__text" style={isMedium ? { marginLeft: '2rem' } : {}}>{text}</p>
    </div>
  );
};

AboutContent.propTypes = {
  titre: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutContent;
