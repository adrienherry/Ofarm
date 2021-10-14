import React from 'react';
import './legend-item.scss';
import PropTypes from 'prop-types';
import deleteIcon from '/icons8-recycle-49.png';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { deleteGardenSpecies } from '../../../../../../store/actions/gardens';

const LegendItem = ({ name, color, isDeletable }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleDeleteGarden = () => {
    dispatch(deleteGardenSpecies(name));
    enqueueSnackbar("Suppression d'une espèce du jardin", { variant: 'success' });
  };
  return (
    <div className="legend-item">
      <div className="legend-item__color" style={{ backgroundColor: color }} />
      <div className="legend-item__name">
        {name}
      </div>
      {isDeletable && (<img src={deleteIcon} alt="trash bin" className="legend-item__delete-icon" onClick={handleDeleteGarden} />)}
      {!isDeletable && (<div />)}
    </div>
  );
};

LegendItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isDeletable: PropTypes.bool.isRequired,
};

export default LegendItem;
