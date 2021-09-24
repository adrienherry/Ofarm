import React from 'react';
import './species-pictures.scss';
// import pour lire images

import tomatesImages2 from '/tomates-jaunes.jpg';
import tomatesImages3 from '/tomates-puree.jpg';
import tomatesImages4 from '/tomates-grosplan.jpg';
import tomatesImages5 from '/tomates-boeuf.jpg';

const SpeciesPictures = () => (

  <div className="species-pictures">

    <h2 className="species-pictures__title">Images</h2>

    <div className="species-pictures__series">
      <img className="species-pictures__series-image2" src={tomatesImages2} alt="tomates jaunes" />
      <img className="species-pictures__series-image3" src={tomatesImages3} alt="purée de tomates" />
      <img className="species-pictures__series-image4" src={tomatesImages4} alt="tomates gros plan" />
      <img className="species-pictures__series-image5" src={tomatesImages5} alt="tomates coeur de boeuf" />
    </div>

  </div>

);

export default SpeciesPictures;
