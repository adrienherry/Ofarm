import React from 'react';
import PropTypes from 'prop-types';
import './footerFrontPage.scss';
// import floral from '../img/floral.svg';
// import bouquet from '../img/bouquet.svg';
import flowers from '../img/flowers.svg';

const FooterFrontPage = () => (
  <div className="FooterFrontPage">
    <div className="FooterFrontPage__plante1">
      <figure>
        <img src={flowers} alt="plante" className="FooterFrontPage__plante1--box" />
      </figure>
    </div>
    <div className="FooterFrontPage__plante2">
      <figure>
        <img src={flowers} alt="plante" className="FooterFrontPage__plante1--box" />
      </figure>
    </div>
    <div className="FooterFrontPage__plante3">
      <figure>
        <img src={flowers} alt="plante" className="FooterFrontPage__plante1--box" />
      </figure>
    </div>
  </div>
);

FooterFrontPage.propTypes = {

};

export default FooterFrontPage;
