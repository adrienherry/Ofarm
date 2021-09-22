import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carrousel.scss';

const Carrousel = ({ pictures }) => (
  <Carousel
    className="carrousel"
    showThumbs={false}
    infiniteLoop
    autoPlay
  >
    {pictures.map((picture) => (
      <div>
        <img
          src={picture.picture}
          key={picture.id}
          alt="carrousel"
          className="carrousel__img"
        />
      </div>
    ))}
  </Carousel>
);

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Carrousel;
