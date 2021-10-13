import React from 'react';
import './harvest-card.scss';

const HarvestCard = ({
  date, quantity, comment, species,
}) => (
  <div className="harvest-card">
    <div className="harvest-card__name">
      <span className="harvest-card__span">Espèce récoltée : </span>{species.name}
    </div>
    <div className="harvest-card__date">
      <span className="harvest-card__span"> Date de récolte : </span>{date}
    </div>
    <div className="harvest-card__quantity">
      <span className="harvest-card__span"> Quantité récoltée : </span>{quantity} kg
    </div>
    <div className="harvest-card__comment">
      <span className="harvest-card__span harvest-card__span-comment"> Commentaire : </span>{comment || 'pas de commentaire'}
    </div>
  </div>
);

export default HarvestCard;
