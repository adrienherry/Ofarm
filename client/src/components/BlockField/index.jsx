import React from 'react';
import PropTypes from 'prop-types';
import './blockField.scss';

const BlockField = ({
  value, type, name, placeholder, onChange,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className="blockField">
      <label
        htmlFor={inputId}
        className="blockField__label"
      >
        {placeholder}
        <input
          id={inputId}
          type={type}
          name={name}
          className="blockField__input"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </label>
      <button type="button" className="blockField__button"> Modifier </button>
    </div>
  );
};

BlockField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

BlockField.defaultProps = {
  value: '',
  type: 'text',
};

export default BlockField;