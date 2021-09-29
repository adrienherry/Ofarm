import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import './co2-info-item.scss';

const Co2InfoItem = ({ co2Percent, name, totalCO2 }) => (
  <div className="co2-info-item">
    <Grid item container direction="row" alignItems="center">
      <div className="co2-info-item__name">- {name} :  </div>
      <div className="co2-info-item__container">
        <div className="co2-info-item__container-percent" style={{ width: `${co2Percent * 100 / totalCO2}%` }} />
      </div>
    </Grid>
  </div>
);

Co2InfoItem.propTypes = {
  co2Percent: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  totalCO2: PropTypes.number.isRequired,
};
export default Co2InfoItem;
