import React from 'react';
import './AboutContent.scss';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@material-ui/core';

const AboutContent = ({ titre, text }) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className="content">
      <h2 className="content__titre">{titre}</h2>
      <div className="content__text">
        {text}
      </div>
    </div>
  );
};

AboutContent.propTypes = {
  titre: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutContent;
