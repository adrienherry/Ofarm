import React from 'react';
import './legend-item.scss';
import PropTypes from 'prop-types';

const LegendItem = ({ name, color }) => (
  <div className="legend-item">
    <div className="legend-item__color" style={{ backgroundColor: color }} />
    <div className="legend-item__name">
      {name}
    </div>
  </div>
);

LegendItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default LegendItem;
