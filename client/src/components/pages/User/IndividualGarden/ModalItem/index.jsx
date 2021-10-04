import React from 'react';
import { convertModalDate } from '../../../../../utils/convertDate';
import './modal-item.scss';

const ModalItem = ({
  imageSpeciesUrl, species, name, startDate, color, endDate,
}) => (
  <div className="modal-item">
    <div className="modal-item__image-container">
      <img src={imageSpeciesUrl} alt={species} className="modal-item__image" />
    </div>
    <div className="modal-item__tag-container">
      <div className="modal-item__tag-container__item" style={{ backgroundColor: { color } }}>{species}</div>
      <div className="modal-item__tag-container__item">{name}</div>
    </div>
    <div className="modal-item__date-container">
      <div className="modal-item__date-container__item">{convertModalDate(startDate)}</div>
      <div className="modal-item__date-container__item">{convertModalDate(endDate)}</div>
    </div>
  </div>
);

export default ModalItem;
