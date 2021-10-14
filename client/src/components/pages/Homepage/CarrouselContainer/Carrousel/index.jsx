import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carrousel.scss';
import { useTheme, useMediaQuery } from '@material-ui/core';

const Carrousel = ({ pictures }) =>
// const theme = useTheme();
// const isMedium = useMediaQuery(theme.breakpoints.down("md"));

	 (
  <Carousel
    className="carrousel"
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    autoPlay
			// width={isMedium ? "100%" : "45%"}
		>
    {pictures.map((picture) => (
      <div key={picture.id}>
        <img
          src={picture.picture}
          alt="carrousel"
          className="carrousel__img"
        />
      </div>
    ))}
  </Carousel>
  );
Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Carrousel;
