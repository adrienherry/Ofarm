import React from 'react';
import PropTypes from 'prop-types';
import './item.scss';
// import flowers from '../img/flowers.svg';

const Item = ({
  name, legende, picture, background, triangle, style,
}) => (
  <div className="FooterFrontPage">
    <img src={picture} alt="plante" className="FooterFrontPage__image" style={style} />
    <div className="FooterFrontPage__background" style={background}>
      <div className="FooterFrontPage__background--triangle" style={triangle} />
    </div>
    <div className="FooterFrontPage__text">
      <h2 className="FooterFrontPage__text--title"> {name} </h2>
      <p className="FooterFrontPage__text--legende"> {legende} </p>
    </div>
  </div>
);

Item.propTypes = {
  picture: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  legende: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  background: PropTypes.object.isRequired,
  triangle: PropTypes.object.isRequired,
};

export default Item;
