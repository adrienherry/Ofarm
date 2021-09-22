import React from 'react';
import PropTypes from 'prop-types';
import './search-bar-item.scss';

const SearchBarItem = ({ thumbnailSrc, name }) => (
  <li className="search-bar-item">
    <div className="search-bar-item__thumbnail">
      <img src={thumbnailSrc} className="search-bar-item__thumbnail-img" />
    </div>
    <h3 className="search-bar-item__name">{ name }</h3>
  </li>
);

SearchBarItem.propTypes = {
  thumbnailSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SearchBarItem;
