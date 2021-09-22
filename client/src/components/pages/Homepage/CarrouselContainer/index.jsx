import React from 'react';
import Carrousel from './Carrousel';

import filip from './Carrousel/carrousel_images/filip-urban-unsplash.jpg';
import markus1 from './Carrousel/carrousel_images/markus-spiske-sF-unsplash.jpg';
import sandie from './Carrousel/carrousel_images/sandie-clarke-unsplash.jpg';
import lool from './Carrousel/carrousel_images/markus-spiske-unsplash.jpg';
import danm from './Carrousel/carrousel_images/markus-spiske-ZS-unsplash.jpg';

const CarrouselContainer = () => (
  <div className="carrousel-container">
    <Carrousel filip={filip} markus1={markus1} sandie={sandie} lool={lool} danm={danm} />
  </div>
);

export default CarrouselContainer;
