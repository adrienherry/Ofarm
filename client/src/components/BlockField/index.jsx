import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserDisabled } from '../../store/actions/profil';
import './blockField.scss';

const BlockField = ({
  value, type, name, placeholder, onChange,
}) => {
  const dispatch = useDispatch();
  const disabled = useSelector((state) => state.profil.disabled);
 
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  const handleClick = () => {
    dispatch(setUserDisabled());
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
          disabled={disabled}
        />
      </label>
      <button
        type="button"
        className="blockField__button"
        onClick={handleClick}
      > Modifier
      </button>
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
