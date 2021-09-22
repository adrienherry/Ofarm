import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carrousel.scss';

const Carrousel = ({
  filip, markus1, sandie, lool, danm,
}) => (
  <Carousel
    className="carrousel"
    showThumbs={false}
    infiniteLoop
    autoPlay
  >
    <div>
      <img src={filip} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={markus1} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src={sandie} />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src={lool} />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img src={danm} />
      <p className="legend">Legend 5</p>
    </div>
  </Carousel>
);

Carrousel.propTypes = {
  filip: PropTypes.string.isRequired,
  markus1: PropTypes.string.isRequired,
  sandie: PropTypes.string.isRequired,
  lool: PropTypes.string.isRequired,
  danm: PropTypes.string.isRequired,
};

export default Carrousel;
