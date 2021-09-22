import React from 'react';
import PropTypes from 'prop-types';
import './search-bar-warning-message.scss';

const SearchBarWarningMessage = ({ message }) => (
  <span className="search-bar-warning-message">
    { message }
  </span>
);

SearchBarWarningMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SearchBarWarningMessage;
